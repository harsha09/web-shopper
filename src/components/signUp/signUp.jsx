import { useState } from "react";
import { signUpWithEmailAndPassword } from "../../firebase/firebase.utils";
import Button from "../button/button";
import FormInput from "../formInput/formInput";
import styles from "./signUp.module.scss";

const SignUp = (props) => {
  const initState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signUpData, setSignUpData] = useState(initState);

  const inputFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = signUpData;
    if (password !== confirmPassword) {
      alert("Password and Confirm Password don't match");
      return;
    }

    const res = await signUpWithEmailAndPassword(email, password, displayName);
    if (res) {
      setSignUpData(initState);
    }
  };

  return (
    <div className={styles["sign-up"]}>
      <div
        className={styles["have-account-text"]}
        onClick={props.onHaveAccountClick}
      >
        {props.haveAccountText}
      </div>
      <h2>Sign Up</h2>
      <form className={styles["sign-up-form"]} onSubmit={submitHandler}>
        <FormInput
          onChange={inputFieldChangeHandler}
          type="text"
          name="displayName"
          value={signUpData.displayName}
          label="Name"
          required
        />
        <FormInput
          onChange={inputFieldChangeHandler}
          type="email"
          name="email"
          value={signUpData.email}
          label="E-Mail"
          required
        />
        <FormInput
          onChange={inputFieldChangeHandler}
          type="password"
          name="password"
          value={signUpData.password}
          label="Password"
          required
        />
        <FormInput
          onChange={inputFieldChangeHandler}
          type="password"
          name="confirmPassword"
          value={signUpData.confirmPassword}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
