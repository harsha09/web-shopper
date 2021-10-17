import { useState } from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import styles from "./signInPage.module.scss";

const SignInPage = ({ show, onSignInClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`${show ? styles["active"] : styles["inactive"]}`}>
      <div className={styles["close"]} onClick={onSignInClose}></div>
      {!isSignUp && (
        <SignIn
          newUserLabel="New User?"
          onNewUserClick={() => {
            setIsSignUp(true);
          }}
        />
      )}
      {isSignUp && (
        <SignUp
          haveAccountText="Have an account?"
          onHaveAccountClick={() => setIsSignUp(false)}
        />
      )}
    </div>
  );
};

export default SignInPage;
