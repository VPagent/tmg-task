import { FC, ReactNode, useState } from "react";
import cn from "clsx";
import { ReactComponent as Vector } from "../../static/icons/Vector.svg";
import styles from "./CheckBox.module.scss";

type Props = {
  label: ReactNode | string;
  className?: string;
};

const CheckBox: FC<Props> = ({ label, className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeInput = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className={cn(styles.label, className)}>
      <span className={cn(styles.bigCircle, isChecked && styles.checked)}>
        <Vector className={cn(styles.icon, isChecked && styles.checked)} />
      </span>
      {label}
      <input
        className={styles.input}
        onChange={handleChangeInput}
        type="checkbox"
        checked={isChecked}
      />
    </label>
  );
};

export default CheckBox;
