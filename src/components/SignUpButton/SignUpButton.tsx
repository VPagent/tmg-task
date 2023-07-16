import { FC } from "react";
import styles from "./SignUpButton.module.scss";
import cn from "clsx";

type Props = {
  className?: string;
  registered: boolean;
  disabled: boolean;
  onClick: () => void;
};

const SignUpButton: FC<Props> = ({
  className,
  registered,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.btn, className)}
      disabled={disabled}
    >
      {!registered ? "Sign Up" : "Registered"}
    </button>
  );
};

export default SignUpButton;
