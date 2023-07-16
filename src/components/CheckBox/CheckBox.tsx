import { FC, ReactNode } from "react";
import cn from "clsx";
import Icon from "../Icon/Icon";
import styles from "./CheckBox.module.scss";

type Props = {
  label: ReactNode | string;
  className?: string;
  checked: boolean;
  showErrors: boolean;
  onChange: (apply: boolean) => void;
};

const CheckBox: FC<Props> = ({
  label,
  className,
  checked,
  showErrors,
  onChange,
}) => {
  const handleChangeInput = () => {
    onChange(!checked);
  };

  return (
    <label className={cn(styles.label, className)}>
      <span
        className={cn(
          styles.bigCircle,
          checked && styles.checked,
          showErrors && styles.error
        )}
      >
        <Icon
          name="vector"
          className={cn(styles.icon, checked && styles.checked)}
        />
      </span>
      {label}
      <input
        className={styles.input}
        onChange={handleChangeInput}
        type="checkbox"
        checked={checked}
      />
    </label>
  );
};

export default CheckBox;
