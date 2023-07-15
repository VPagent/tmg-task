import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";
import cn from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
