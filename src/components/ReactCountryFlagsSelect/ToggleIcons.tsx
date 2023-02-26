import React from "react";
import cx from "classnames";

import { OpenIcon, CloseIcon } from "../Icons";

import styles from "./ReactSelectFlags.module.scss";

export type ToggleIconsProps = {
  isOpen: boolean;
  disabled: boolean;
  CustomOpenIcon?: any;
  CustomCloseIcon?: any;
  classes: Record<string, string>;
  handleToggleSelect: () => void;
};
export const ToggleIcons: React.FC<ToggleIconsProps> = ({
  isOpen,
  disabled,
  CustomOpenIcon,
  CustomCloseIcon,
  classes,
  handleToggleSelect,
}) => {
  if (isOpen) {
    return CustomOpenIcon ? (
      <CustomOpenIcon
        onClick={handleToggleSelect}
        className={styles.openIcon}
      />
    ) : (
      <OpenIcon
        onClick={handleToggleSelect}
        className={cx(
          styles.openIcon,
          { [styles.disabledOpenIcon]: disabled },
          classes.openIcon
        )}
        data-testid="open-icon"
      />
    );
  } else {
    return CustomCloseIcon ? (
      <CustomCloseIcon
        onClick={handleToggleSelect}
        className={styles.closeIcon}
      />
    ) : (
      <CloseIcon
        onClick={handleToggleSelect}
        className={cx(
          styles.closeIcon,
          { [styles.disabledCloseIcon]: disabled },
          classes.closeIcon
        )}
        data-testid="close-icon"
      />
    );
  }
};
