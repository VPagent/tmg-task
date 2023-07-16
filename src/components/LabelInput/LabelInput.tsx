import { ChangeEvent, FC, ReactNode, useState } from "react";
import styles from "./LabelInput.module.scss";
import cn from "clsx";

type Props = {
  type: string;
  className?: string;
  icon?: ReactNode;
  placeHolder: string;
  name: string;
  value: string;
  validation: boolean;
  errorMessage: string;
  showErrors: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LabelInput: FC<Props> = ({
  type,
  className,
  icon,
  placeHolder,
  name,
  value,
  validation,
  errorMessage,
  showErrors,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleBlurInput = () => {
    if (!value) {
      setIsFocus(false);
    }
  };

  return (
    <label className={cn(styles.label, className)}>
      <span className={styles.iconWrapper}>{icon}</span>
      <span className={cn(styles.fakePlaceholder, isFocus && styles.focus)}>
        {placeHolder}
      </span>
      {!validation && showErrors && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
      <input
        className={cn(styles.input, value && styles.inputFilled)}
        type={type}
        onChange={(e) => onChange(e)}
        name={name}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={handleBlurInput}
      />
    </label>
  );
};

export default LabelInput;
