const UseValidation = () => {
  const nameValidation = (name: string) => {
    if (!name || name.length < 2) {
      return false;
    }

    return true;
  };

  const countryValidation = (country: string) => {
    if (!country || country.length <= 2) {
      return false;
    }

    return true;
  };

  const phoneValidation = (phone: string) => {
    if (!phone || !phone.includes("+") || phone.length < 10) {
      return false;
    }

    return true;
  };

  const passwordValidation = (password: string) => {
    if (!password) {
      return false;
    }

    const specialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);

    if (!specialChars || !hasNumber || !hasLetter) {
      return false;
    }

    return true;
  };

  const passwordConfirmValidation = (
    password: string,
    passwordConfirm: string
  ) => {
    if (!passwordConfirm || passwordConfirm !== password) {
      return false;
    }

    return true;
  };

  const emailValidation = (email: string) => {
    if (!email || !email.includes("@") || !email.includes(".")) {
      return false;
    }
    return true;
  };

  const applyValidation = (apply: boolean) => {
    if (!apply) {
      return false;
    }
    return true;
  };

  return {
    nameValidation,
    phoneValidation,
    passwordValidation,
    passwordConfirmValidation,
    emailValidation,
    countryValidation,
    applyValidation,
  };
};

export default UseValidation;
