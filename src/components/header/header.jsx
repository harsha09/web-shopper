import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/WebShopper.png";
import styles from "./header.module.scss";

const Header = ({ onSignOut, currentUser, onSignInClick }) => {
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
          {currentUser ? (
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

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
