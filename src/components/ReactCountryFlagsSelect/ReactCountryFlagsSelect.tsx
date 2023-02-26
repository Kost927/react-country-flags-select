import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cx from "classnames";

import { Country, CountryCode, OnSelect, Countries } from "../../types";
import {
  countries as allCountries,
  countryCodeToPascalCase,
  getCountryLabel,
} from "../../utils";
import { SearchableSelectInput } from "./SearchableSelectInput";
import { ReactSelectFlagsListItem } from "./ReactSelectFlagsListItem";
import { NonSearchableSelectButton } from "./NonSearchableSelectButton";
import { ToggleIcons } from "./ToggleIcons";
import { ClearIcon } from "../Icons";
import * as flags from "../Flags";

import styles from "./ReactSelectFlags.module.scss";

type Flags = typeof flags;
type FlagKey = keyof Flags;

export type Props = {
  onSelect: OnSelect;
  selected: Country | null;
  classes?: Record<string, string>;
  customCountries?: Countries;
  searchable?: boolean;
  customLabelOptions?: Countries;
  labelWithCountryCode?: boolean;
  labelOnlyCountryCode?: boolean;
  searchPlaceholder?: string;
  selectPlaceholder?: string;
  CustomOpenIcon?: any;
  CustomCloseIcon?: any;
  clearIcon?: boolean;
  selectWidth?: number;
  selectHeight?: number;
  optionsListMaxHeight?: number;
  optionSize?: number;
  selectedSize?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  id?: string;
};

const ReactCountryFlagsSelect: React.FC<Props> = ({
  onSelect,
  selected = null,
  searchable = false,
  customCountries,
  classes = {},
  customLabelOptions,
  labelWithCountryCode = false,
  labelOnlyCountryCode = false,
  searchPlaceholder,
  selectPlaceholder,
  CustomOpenIcon,
  CustomCloseIcon,
  clearIcon = true,
  selectWidth = 250,
  selectHeight = 30,
  optionSize = 16,
  selectedSize = 16,
  fullWidth = false,
  optionsListMaxHeight = 300,
  disabled = false,
  id,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Country[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const countries = customCountries ? customCountries : allCountries;

  if (selected && !Object.keys(countries).includes(selected.countryCode)) {
    throw new Error(
      `Country code "${selected.countryCode}" is not included in the country list`
    );
  }

  const options = useMemo(() => {
    return Object.keys(countries).map((key) => ({
      label: getCountryLabel(
        key as CountryCode,
        customLabelOptions as Countries,
        allCountries,
        labelWithCountryCode,
        labelOnlyCountryCode
      ),
      countryCode: key,
    }));
  }, [
    countries,
    customLabelOptions,
    labelWithCountryCode,
    labelOnlyCountryCode,
  ]);

  useLayoutEffect(() => {
    const searchedItems = inputRef.current?.value ?? "";

    const filteredOptions = options.filter(
      (option) =>
        searchedItems &&
        option.label.toLowerCase().includes(searchedItems.toLowerCase())
    );

    if (searchedItems) {
      setFilteredOptions(filteredOptions);
    } else {
      setFilteredOptions(options);
    }
  }, [inputRef.current?.value, options]);

  useLayoutEffect(() => {
    if (selected) {
      setSearchTerm(selected.label);
    }
  }, [selected]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (isOpen && selected) {
        setSearchTerm(selected.label);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef, selected, isOpen, searchTerm]);

  useEffect(() => {
    if (!searchTerm) {
      onSelect(null);
    }
  }, [onSelect, searchTerm]);

  const handleOptionClick = (option: Country): void => {
    setSearchTerm(option.label);
    onSelect(option);
    setIsOpen(false);
  };

  const handleSearch = (): void => {
    setIsOpen(true);
    const searchedItems = inputRef.current?.value ?? "";

    setSearchTerm(searchedItems);
  };

  const handleToggleSelect = (): void => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleSelectWithKeyboard = (
    event: React.KeyboardEvent,
    option: Country
  ): void => {
    event.preventDefault();
    if (event.key === "Enter") {
      onSelect(option);
      setSearchTerm(option.label);
      setIsOpen(false);
    }
  };

  const handleClearSearch = (): void => {
    if ((selected || searchTerm) && !disabled) {
      onSelect(null);
      setSearchTerm("");
      setFilteredOptions(options);
    }
  };

  const getSelectedFlag = (): React.ReactElement | null => {
    const selectedFlagCode = selected ? selected.countryCode : "";

    if (selectedFlagCode) {
      const selectedFlagName = countryCodeToPascalCase(selectedFlagCode);
      const SelectedFlag = flags[selectedFlagName as FlagKey];

      return (
        <SelectedFlag
          className={styles.selectedFlagIcon}
          style={{ fontSize: selectedSize ? `${selectedSize}px` : "1rem" }}
        />
      );
    }

    return null;
  };

  const selectButtonPlaceholder = selectPlaceholder
    ? selectPlaceholder
    : "Select a country";

  return (
    <div
      ref={selectRef}
      className={cx(styles.container, classes.container)}
      style={{
        width: fullWidth ? "100%" : `${selectWidth}px`,
        height: `${selectHeight}px`,
      }}
      id={id}
    >
      <div
        className={cx(styles.selectWrapper, classes.selectWrapper)}
        style={{
          width: fullWidth ? "100%" : `${selectWidth}px`,
          height: `${selectHeight}px`,
        }}
      >
        {searchable ? (
          <SearchableSelectInput
            searchTerm={searchTerm}
            searchPlaceholder={searchPlaceholder}
            classes={classes}
            inputRef={inputRef}
            fullWidth={fullWidth}
            selectWidth={selectWidth}
            selectHeight={selectHeight}
            selected={selected}
            selectedSize={selectedSize}
            disabled={disabled}
            handleToggleSelect={handleToggleSelect}
            handleSearch={handleSearch}
          />
        ) : (
          <NonSearchableSelectButton
            selectButtonPlaceholder={selectButtonPlaceholder}
            classes={classes}
            fullWidth={fullWidth}
            selectWidth={selectWidth}
            selectHeight={selectHeight}
            selected={selected}
            selectedSize={selectedSize}
            disabled={disabled}
            handleToggleSelect={handleToggleSelect}
          />
        )}
        <ToggleIcons
          isOpen={isOpen}
          disabled={disabled}
          CustomOpenIcon={CustomOpenIcon}
          CustomCloseIcon={CustomCloseIcon}
          classes={classes}
          handleToggleSelect={handleToggleSelect}
        />
        {clearIcon && !disabled && (
          <ClearIcon
            onClick={handleClearSearch}
            className={cx(styles.clearIcon, classes.clearIcon)}
            data-testid="clear-icon"
          />
        )}
        {getSelectedFlag()}
      </div>

      {isOpen && (
        <ul
          className={cx(styles.optionsWrapper, classes.optionsWrapper)}
          style={{
            width: fullWidth ? "100%" : `${selectWidth}px`,
            maxHeight: `${optionsListMaxHeight}px`,
          }}
          data-testid="options-wrapper"
        >
          {filteredOptions.length ? (
            filteredOptions.map((option) => (
              <ReactSelectFlagsListItem
                key={option.countryCode}
                option={option}
                classes={classes}
                optionSize={optionSize}
                selected={selected}
                handleOptionClick={handleOptionClick}
                handleSelectWithKeyboard={handleSelectWithKeyboard}
              />
            ))
          ) : (
            <li
              className={cx(styles.option, classes.option)}
              style={{ fontSize: optionSize ? `${optionSize}px` : "1rem" }}
            >
              No options found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ReactCountryFlagsSelect;
