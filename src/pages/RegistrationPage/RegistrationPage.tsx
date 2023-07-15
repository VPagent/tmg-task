import { ChangeEvent, FC, useState } from "react";
import styles from "./RegistrationPage.module.scss";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import LabelInput from "../../components/LabelInput/LabelInput";
import { ReactComponent as User } from "../../static/icons/user.svg";
import { ReactComponent as DoubleUser } from "../../static/icons/doubleUser.svg";
import { ReactComponent as Country } from "../../static/icons/location.svg";
import { ReactComponent as Phone } from "../../static/icons/phone.svg";
import { ReactComponent as Password } from "../../static/icons/password.svg";
import { ReactComponent as ConfirmPassword } from "../../static/icons/confirmPassword.svg";
import { ReactComponent as Email } from "../../static/icons/email.svg";
import CheckBox from "../../components/CheckBox/CheckBox";
import SignUpButton from "../../components/SignUpButton/SignUpButton";

const RegistrationPage: FC = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userSecondName, setUserSecondName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "firstName":
        return setUserFirstName(e.target.value);
      case "secondName":
        return setUserSecondName(e.target.value);
      case "country":
        return setUserCountry(e.target.value);
      case "phone":
        return setUserPhone(e.target.value);
      case "password":
        return setUserPassword(e.target.value);
      case "confirmPassword":
        return setUserConfirmPassword(e.target.value);
      case "email":
        return setUserEmail(e.target.value);
      default:
        return console.log("error in switch");
    }
  };
  return (
    <section className={styles.section}>
      <section className={styles.smallWrapperSection}>
        <Container>
          <Logo />
          <form className={styles.form}>
            <LabelInput
              className={styles.label}
              type="text"
              name="firstName"
              placeHolder="First Name"
              onChange={handleChangeInput}
              icon={<User />}
              value={userFirstName}
            />
            <LabelInput
              className={styles.label}
              type="text"
              name="secondName"
              placeHolder="Second Name"
              onChange={handleChangeInput}
              icon={<DoubleUser />}
              value={userSecondName}
            />
            <LabelInput
              className={styles.label}
              type="text"
              name="country"
              placeHolder="Country"
              onChange={handleChangeInput}
              icon={<Country />}
              value={userCountry}
            />
            <LabelInput
              className={styles.label}
              type="number"
              name="phone"
              placeHolder="Phone"
              onChange={handleChangeInput}
              icon={<Phone />}
              value={userPhone}
            />
            <LabelInput
              className={styles.label}
              type="password"
              name="password"
              placeHolder="Password"
              onChange={handleChangeInput}
              icon={<Password />}
              value={userPassword}
            />
            <LabelInput
              className={styles.label}
              type="password"
              name="confirmPassword"
              placeHolder="Confirm password"
              onChange={handleChangeInput}
              icon={<ConfirmPassword />}
              value={userConfirmPassword}
            />
            <LabelInput
              className={styles.label}
              type="email"
              name="email"
              placeHolder="Email"
              onChange={handleChangeInput}
              icon={<Email />}
              value={userEmail}
            />
          </form>
          <CheckBox
            className={styles.label}
            label={
              <p className={styles.checkBoxText}>
                I agree to the{" "}
                <a className={styles.link} href="">
                  Terms & Conditions
                </a>
              </p>
            }
          />

          <SignUpButton className={styles.signUpBtn} onChange={() => {}} />
          <p className={styles.loginText}>
            If you have an account,{" "}
            <span className={styles.loginSpan}>Log In</span>
          </p>
        </Container>
      </section>
    </section>
  );
};

export default RegistrationPage;
