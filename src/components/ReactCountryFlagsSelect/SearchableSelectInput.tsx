import React from "react";
import cx from "classnames";

import { Country } from "../../types";

import styles from "./ReactSelectFlags.module.scss";

export type SearchableSelectInputProps = {
  searchTerm: string;
  searchPlaceholder?: string;
  classes: Record<string, string>;
  inputRef: React.RefObject<HTMLInputElement>;
  fullWidth: boolean;
  selectWidth: number;
  selectHeight: number;
  selected: Country | null;
  selectedSize: number;
  disabled: boolean;
  handleToggleSelect: () => void;
  handleSearch: () => void;
};

export const SearchableSelectInput: React.FC<SearchableSelectInputProps> = ({
  searchTerm,
  searchPlaceholder,
  classes,
  inputRef,
  fullWidth,
  selectWidth,
  selectHeight,
  selected,
  selectedSize,
  disabled,
  handleToggleSelect,
  handleSearch,
}) => {
  return (
    <input
      placeholder={searchPlaceholder ?? "Type or select country..."}
      type="text"
      value={searchTerm}
      className={cx(styles.searchSelect, classes.searchSelect)}
      onClick={handleToggleSelect}
      onChange={handleSearch}
      ref={inputRef}
      tabIndex={-1}
      autoComplete="off"
      style={{
        width: fullWidth ? "100%" : `${selectWidth}px`,
        height: `${selectHeight}px`,
        paddingLeft: selected ? `calc(${selectedSize}px + 16px)` : "10px",
        fontSize: selectedSize ? `${selectedSize}px` : "1rem",
      }}
      disabled={disabled}
      data-testid="searchable-input"
    />
  );
};
