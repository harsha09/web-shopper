import { useState } from "react";
import Button from "../button/button";
import FormInput from "../formInput/formInput";
import styles from "./signIn.module.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const initCreds = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  const [creds, setCreds] = useState(initCreds);

  const submitFormHandler = (event) => {
    event.preventDefault();
    setCreds(initCreds);
  };

  const inputFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setCreds({ ...creds, [name]: value });
  };

  return (
    <div className={styles["sign-in"]}>
      <Button
        className={styles["continue-google-btn"]}
        googleSignIn
        type="button"
        onClick={signInWithGoogle}
      >
        Continue With Google
      </Button>
      <h2>I already have an account</h2>
      <span>Sign-in with your email and password</span>
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
