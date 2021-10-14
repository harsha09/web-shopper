import { Link } from "react-router-dom";
import logo from "../../assets/WebShopper.png";
import styles from "./header.module.scss";

const Header = ({ onSignOut, curUser, onSignInClick }) => {
  return (
    <div className={styles["header"]}>
      <Link to="/">
        <img className={styles["logo"]} src={logo} alt="Logo" />
      </Link>
      <div className={styles["options"]}>
        <Link className={styles["option"]} to="/shop">
          SHOP
        </Link>
        <Link className={styles["option"]} to="/contact">
          CONTACT
        </Link>
        <div>
          {curUser ? (
            <div className={styles["option"]} onClick={onSignOut}>
              SIGN OUT
            </div>
          ) : (
            <div className={styles["option"]} onClick={onSignInClick}>
              SIGN IN
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
