import { FC } from "react";
import styles from "./SignUpButton.module.scss";
import cn from "clsx";

type Props = {
  onChange: () => void;
  className?: string;
};

const SignUpButton: FC<Props> = ({ onChange, className }) => {
  return <button className={cn(styles.btn, className)}>Sign Up</button>;
};

export default SignUpButton;
