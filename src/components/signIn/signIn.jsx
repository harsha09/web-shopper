import { useState } from "react";
import Button from "../button/button";
import FormInput from "../formInput/formInput";
import styles from "./signIn.module.scss";
import { signInWithEmailAndPassword, signInWithGoogle } from "../../firebase/firebase.utils";

const initCreds = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  const [creds, setCreds] = useState(initCreds);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const user = await signInWithEmailAndPassword(creds.email, creds.password);
    if (user) {
      setCreds(initCreds);
    }
  };

  const inputFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setCreds({ ...creds, [name]: value });
  };

  return (
    <div className={styles["sign-in"]}>
      <span className={styles["new-user"]} onClick={props.onNewUserClick}>
        {props.newUserLabel}
      </span>
      <h2>Sign In</h2>
      <Button
        className={styles["continue-google-btn"]}
        googleSignIn
        type="button"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>
      <form onSubmit={submitFormHandler}>
        <FormInput
          onChange={inputFieldChangeHandler}
          type="email"
          name="email"
          value={creds.email}
          label="E-Mail"
          required
        />
        <FormInput
          onChange={inputFieldChangeHandler}
          type="password"
          name="password"
          value={creds.password}
          label="Password"
          required
        />
        <div className={styles["buttons"]}>
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
