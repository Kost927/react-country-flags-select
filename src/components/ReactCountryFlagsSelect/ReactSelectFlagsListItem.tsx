import React from "react";
import cx from "classnames";

import { countryCodeToPascalCase } from "../../utils";
import * as flags from "../Flags";
import { Country } from "../../types";

import styles from "./ReactSelectFlags.module.scss";

type Flags = typeof flags;
type FlagKey = keyof Flags;

export type ReactSelectFlagsListItemProps = {
  option: Country;
  optionSize: number;
  classes: Record<string, string>;
  selected: Country | null;
  handleOptionClick: (option: Country) => void;
  handleSelectWithKeyboard: (
    event: React.KeyboardEvent,
    option: Country
  ) => void;
};

export const ReactSelectFlagsListItem: React.FC<
  ReactSelectFlagsListItemProps
> = ({
  option,
  optionSize,
  classes,
  selected,
  handleOptionClick,
  handleSelectWithKeyboard,
}) => {
  const { label, countryCode } = option;
  const pascalCaseCode = countryCodeToPascalCase(countryCode);
  const CountryFlag = flags[pascalCaseCode as FlagKey];
  return (
    <li
      key={label}
      className={cx(styles.option, classes.option, {
        [styles.selected]: label === selected?.label,
      })}
      style={{ fontSize: optionSize ? `${optionSize}px` : "1rem" }}
      onClick={() => handleOptionClick(option)}
      onKeyUp={(event) => handleSelectWithKeyboard(event, option)}
      tabIndex={0}
      data-testid={`list-item-${option.countryCode}`}
    >
      <div className={cx(styles.optionFlag, classes.optionFlag)}>
        <CountryFlag data-testid="country-flag" />
      </div>
      <p className={cx(styles.optionText, classes.optionText)}>{label}</p>
    </li>
  );
};
