import styles from "./button.module.scss";

const Button = ({ googleSignIn, children, ...otherProps }) => {
  const buttonClass = `${googleSignIn ? styles["google-sign-in"] : ""} ${
    styles.button
  }`;
  return (
    <button {...otherProps} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
