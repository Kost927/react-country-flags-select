import React from "react";
import cx from "classnames";

import { Country } from "../../types";

import styles from "./ReactSelectFlags.module.scss";

export type NonSearchableSelectButtonProps = {
  selectButtonPlaceholder: string;
  classes: Record<string, string>;
  fullWidth: boolean;
  selectWidth: number;
  selectHeight: number;
  selected: Country | null;
  selectedSize: number;
  disabled: boolean;
  handleToggleSelect: () => void;
};

export const NonSearchableSelectButton: React.FC<
  NonSearchableSelectButtonProps
> = ({
  selectButtonPlaceholder,
  classes,
  fullWidth,
  selectWidth,
  selectHeight,
  selected,
  selectedSize,
  disabled,
  handleToggleSelect,
}) => {
  return (
    <button
      type="button"
      className={cx(styles.buttonSelect, classes.buttonSelect)}
      onClick={handleToggleSelect}
      style={{
        width: fullWidth ? "100%" : `${selectWidth}px`,
        height: `${selectHeight}px`,
        paddingLeft: selected ? `calc(${selectedSize}px + 16px)` : "10px",
        fontSize: selectedSize ? `${selectedSize}px` : "1rem",
      }}
      tabIndex={-1}
      disabled={disabled}
      data-testid="non-searchable-button"
    >
      <span
        className={cx(styles.buttonSelectText, classes.buttonSelectText, {
          [styles.labelPlaceholder]: !selected?.label,
        })}
      >
        {selected?.label ?? selectButtonPlaceholder}
      </span>
    </button>
  );
};
