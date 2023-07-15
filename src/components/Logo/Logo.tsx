import { FC } from "react";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <p className={styles.logo}>
      <span className={styles.greenPart}>Sign Up</span> and find the best place
      to rest while traveling
    </p>
  );
};

export default Logo;
