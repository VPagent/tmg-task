import { FC } from "react";
import styles from "./OptionsBox.module.scss";
import { CountryData } from "../../types";
import cn from "clsx";

type Props = {
  data: CountryData;
  value: string;
  onClose: () => void;
  onChange: (name: string) => void;
};

const OptionsBox: FC<Props> = ({ data, value, onChange, onClose }) => {
  const handleClickOnOption = (name: string) => {
    onChange(name);
    onClose();
  };

  return (
    <div className={styles.optionsBox}>
      {data &&
        data.map((item) => {
          const isActive = value === item.name;
          return (
            <div
              key={item.name}
              className={cn(styles.optionItem, isActive && styles.active)}
              onClick={() => handleClickOnOption(item.name)}
            >
              <p>{item.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default OptionsBox;
