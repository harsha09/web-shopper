import styles from "./button.module.scss";

const Button = (props) => {
    console.log("styles", styles)
  return (
    <button type="submit" className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
