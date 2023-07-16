import cn from "clsx";
import { ReactComponent as user } from "../../static/icons/user.svg";
import { ReactComponent as doubleUser } from "../../static/icons/doubleUser.svg";
import { ReactComponent as location } from "../../static/icons/location.svg";
import { ReactComponent as phone } from "../../static/icons/phone.svg";
import { ReactComponent as password } from "../../static/icons/password.svg";
import { ReactComponent as confirmPassword } from "../../static/icons/confirmPassword.svg";
import { ReactComponent as email } from "../../static/icons/email.svg";
import { ReactComponent as logo } from "../../static/icons/logo.svg";
import { ReactComponent as chevron } from "../../static/icons/chevron.svg";
import { ReactComponent as vector } from "../../static/icons/Vector.svg";

const icons = {
  user,
  doubleUser,
  location,
  phone,
  password,
  confirmPassword,
  email,
  chevron,
  logo,
  vector,
};

export type IconName = keyof typeof icons;

type Props = {
  className?: string;
  name: IconName;
};

const Icon: React.FC<Props> = ({ className, name }) => {
  const CurrentIcon = icons[name];

  if (!CurrentIcon) {
    console.error(`Icon with name ${name} is undefined`);
  }

  return <CurrentIcon className={cn(className)} />;
};

export default Icon;
