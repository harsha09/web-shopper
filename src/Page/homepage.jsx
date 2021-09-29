import styles from "./homepage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles["directory-menu"]}>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>HATS</h1>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>MEN</h1>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>WOMEN</h1>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>KIDS</h1>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>SUMMER</h1>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>                                
      </div>
    </div>
  );
};

export default HomePage;
