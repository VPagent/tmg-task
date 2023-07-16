import { FC, ReactNode, useState } from "react";
import { CountryData } from "../../types";
import cn from "clsx";
import OptionsBox from "../OptionsBox/OptionsBox";
import Icon from "../Icon/Icon";
import styles from "./CustomSelect.module.scss";

type Props = {
  className?: string;
  icon: ReactNode;
  placeHolder: string;
  value: string;
  countryData: CountryData;
  validation: boolean;
  errorMessage: string;
  showErrors: boolean;
  onChange: (name: string) => void;
};

const CustomSelect: FC<Props> = ({
  className,
  icon,
  placeHolder,
  value,
  countryData,
  validation,
  errorMessage,
  showErrors,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorShow, setErrorShow] = useState(false);

  const handleToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseOptions = () => {
    if (!value) {
      setErrorShow(true);
    }
    setIsOpen(false);
  };

  const isFilled = isOpen || value;
  return (
    <div
      className={cn(
        styles.selectWrapper,
        isFilled && styles.inputFilled,
        isOpen && styles.outlined,
        className
      )}
      onClick={handleToggleOptions}
    >
      <div className={styles.iconWrapper}>{icon}</div>
      <span className={cn(styles.fakePlaceholder, isFilled && styles.focus)}>
        {placeHolder}
      </span>
      <p className={cn(styles.textWrapper, isFilled && styles.textTransform)}>
        {value}
      </p>
      <Icon
        name="chevron"
        className={cn(styles.chevronIcon, isOpen && styles.iconIsOpen)}
      />
      {!validation && showErrors && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
      {isOpen && (
        <OptionsBox
          data={countryData}
          onChange={onChange}
          value={value}
          onClose={handleCloseOptions}
        />
      )}
    </div>
  );
};

export default CustomSelect;
