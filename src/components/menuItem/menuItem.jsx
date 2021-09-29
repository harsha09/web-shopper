import styles from "./menuItem.module.scss";

const MenuItem = (props) => {
  return (
    <div className={`${styles[props.size]} ${styles["menu-item"]}`}>
      <div
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        className={styles["background-image"]}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{props.title.toUpperCase()}</h1>
        <span className={styles.subtitle}>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
