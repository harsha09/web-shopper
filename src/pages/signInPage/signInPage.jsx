import SignIn from "../../components/signIn/signIn";
import styles from "./signInPage.module.scss";

const SignInPage = ({ show, onSignInClose }) => {
  return (
    <div className={`${show ? styles["active"] : styles["inactive"]}`}>
      <div className={styles["close"]} onClick={onSignInClose}></div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
