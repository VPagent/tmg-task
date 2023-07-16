import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import Icon from "../Icon/Icon";
import styles from "./Logo.module.scss";

type Props = {
  showErrors: boolean;
};

const Logo: FC<Props> = ({ showErrors }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <div>
      {isDesktop && !showErrors && <Icon name="logo" />}
      <p className={styles.logo}>
        <span className={styles.greenPart}>Sign Up</span> and find the best
        place to rest while traveling
      </p>
    </div>
  );
};

export default Logo;
