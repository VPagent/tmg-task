import { ChangeEvent, FC, ReactNode } from "react";
import styles from "./LabelInput.module.scss";
import cn from "clsx";

type Props = {
  type: string;
  className?: string;
  icon?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  name: string;
  value: string;
};

const LabelInput: FC<Props> = ({
  type,
  className,
  icon,
  placeHolder,
  name,
  value,
  onChange,
}) => {
  return (
    <label className={cn(styles.label, className)}>
      <span className={styles.iconWrapper}>{icon}</span>
      <input
        className={styles.input}
        type={type}
        onChange={(e) => onChange(e)}
        placeholder={placeHolder ? placeHolder : ""}
        name={name}
        value={value}
      />
    </label>
  );
};

export default LabelInput;
