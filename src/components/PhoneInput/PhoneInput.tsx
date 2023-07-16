import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import styles from "./PhoneInput.module.scss";
import InputMask from "react-input-mask";
import cn from "clsx";

type Props = {
  countryCode: string;
  value: string;
  icon?: ReactNode;
  className: string;
  placeHolder: string;
  validation: boolean;
  errorMessage: string;
  showErrors: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PhoneInput: FC<Props> = ({
  countryCode,
  value,
  icon,
  className,
  placeHolder,
  validation,
  errorMessage,
  showErrors,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleBlurInput = () => {
    if (value.length <= 1 && !countryCode) {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    if (value) {
      setIsFocus(true);
    }
    if (countryCode) {
      setIsFocus(true);
    }
  }, [value, countryCode]);

  return (
    <div className={cn(styles.labelWrapper, className)}>
      <div className={styles.iconWrapper}>{icon}</div>
      <span className={cn(styles.fakePlaceholder, isFocus && styles.focus)}>
        {placeHolder}
      </span>
      {!validation && showErrors && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
      <InputMask
        className={cn(styles.phoneLabel, isFocus && styles.inputFilled)}
        mask={`${countryCode} 99999999999`}
        alwaysShowMask={true}
        value={value}
        onChange={onChange}
        name="phone"
        maskChar={null}
        onFocus={() => setIsFocus(true)}
        onBlur={handleBlurInput}
      />
    </div>
  );
};

export default PhoneInput;
