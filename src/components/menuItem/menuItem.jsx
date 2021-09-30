import styles from "./menuItem.module.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ size, title, imageUrl, linkUrl, match, history }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${styles[size]} ${styles["menu-item"]}`}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles["background-image"]}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
