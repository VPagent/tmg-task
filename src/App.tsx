import React, { FC } from "react";
import styles from "./App.module.scss";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <RegistrationPage />
    </div>
  );
};

export default App;
