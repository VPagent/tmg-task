import { ChangeEvent, FC, useEffect, useState } from "react";
import { errorMessages } from "../../components/LabelInput/errorMessages";
import cn from "clsx";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import LabelInput from "../../components/LabelInput";
import CheckBox from "../../components/CheckBox/CheckBox";
import SignUpButton from "../../components/SignUpButton";
import CustomSelect from "../../components/CustomSelect";
import countryData from "./countryData";
import PhoneInput from "../../components/PhoneInput";
import UseValidation from "../../helpers/UseValidation";
import Icon from "../../components/Icon";
import styles from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userSecondName, setUserSecondName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userApply, setUserApply] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const {
    nameValidation,
    phoneValidation,
    passwordValidation,
    emailValidation,
    countryValidation,
    applyValidation,
    passwordConfirmValidation,
  } = UseValidation();

  useEffect(() => {
    if (userCountry) {
      const currentCode = countryData.find(
        (item) => item.name === userCountry
      )?.phone;
      //@ts-ignore
      setCountryCode(`+ ${currentCode}`);
    }
  }, [userCountry]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "firstName":
        return setUserFirstName(e.target.value);
      case "secondName":
        return setUserSecondName(e.target.value);
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

  const handleSubmit = () => {
    if (
      nameValidation(userFirstName) &&
      phoneValidation(userPhone) &&
      passwordValidation(userPassword) &&
      passwordConfirmValidation(userPassword, userConfirmPassword) &&
      emailValidation(userEmail) &&
      countryValidation(userCountry) &&
      applyValidation(userApply)
    ) {
      setShowErrors(false);
      setRegistered(true);
      return;
    }

    setShowErrors(true);
  };

  const handleSetCountry = (name: string) => {
    setUserCountry(name);
  };

  const handleApply = (isApply: boolean) => {
    setUserApply(isApply);
  };

  const disabledBtn = () => {
    if (
      !userFirstName &&
      !userSecondName &&
      !userCountry &&
      userPhone.length <= 1 &&
      !userPassword &&
      !userConfirmPassword &&
      !userEmail &&
      !userApply
    ) {
      return true;
    }
    return false;
  };

  return (
    <section className={cn(styles.section, showErrors && styles.errorSection)}>
      <section className={styles.smallWrapperSection}>
        <Container>
          <Logo showErrors={showErrors} />
          <form className={styles.form}>
            <LabelInput
              className={styles.label}
              type="text"
              name="firstName"
              placeHolder="First Name"
              onChange={handleChangeInput}
              icon={<Icon name="user" />}
              value={userFirstName}
              validation={nameValidation(userFirstName)}
              errorMessage={errorMessages.firstName}
              showErrors={showErrors}
            />
            <LabelInput
              className={styles.label}
              type="text"
              name="secondName"
              placeHolder="Second Name"
              onChange={handleChangeInput}
              icon={<Icon name="doubleUser" />}
              value={userSecondName}
              validation={nameValidation(userSecondName)}
              errorMessage={errorMessages.secondName}
              showErrors={showErrors}
            />
            <CustomSelect
              className={styles.label}
              placeHolder="Country"
              onChange={handleSetCountry}
              icon={<Icon name="location" />}
              value={userCountry}
              countryData={countryData}
              validation={countryValidation(userCountry)}
              errorMessage={errorMessages.country}
              showErrors={showErrors}
            />
            <PhoneInput
              className={styles.label}
              countryCode={countryCode}
              placeHolder="Phone"
              onChange={handleChangeInput}
              icon={<Icon name="phone" />}
              value={userPhone}
              validation={phoneValidation(userPhone)}
              errorMessage={errorMessages.phone}
              showErrors={showErrors}
            />
            <LabelInput
              className={styles.label}
              type="password"
              name="password"
              placeHolder="Password"
              onChange={handleChangeInput}
              icon={<Icon name="password" />}
              value={userPassword}
              validation={passwordValidation(userPassword)}
              errorMessage={errorMessages.password}
              showErrors={showErrors}
            />
            <LabelInput
              className={styles.label}
              type="password"
              name="confirmPassword"
              placeHolder="Confirm password"
              onChange={handleChangeInput}
              icon={<Icon name="confirmPassword" />}
              value={userConfirmPassword}
              validation={passwordConfirmValidation(
                userPassword,
                userConfirmPassword
              )}
              errorMessage={errorMessages.confirmPassword}
              showErrors={showErrors}
            />
            <LabelInput
              className={styles.label}
              type="email"
              name="email"
              placeHolder="Email"
              onChange={handleChangeInput}
              icon={<Icon name="email" />}
              value={userEmail}
              validation={emailValidation(userEmail)}
              errorMessage={errorMessages.email}
              showErrors={showErrors}
            />
            <CheckBox
              className={styles.label}
              onChange={handleApply}
              checked={userApply}
              showErrors={showErrors}
              label={
                <p className={styles.checkBoxText}>
                  I agree to the{" "}
                  <a className={styles.link} href="">
                    Terms & Conditions
                  </a>
                </p>
              }
            />
          </form>

          <SignUpButton
            className={styles.signUpBtn}
            onClick={handleSubmit}
            registered={registered}
            disabled={disabledBtn()}
          />
          <div className={styles.loginTextBox}>
            <p className={styles.loginText}>
              If you have an account,{" "}
              <span className={styles.loginSpan}>Log In</span>
            </p>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default RegistrationPage;
