import styles from "./homePage.module.scss";
import Directory from "../../components/directory/directory";

const HomePage = () => {
  return <div className={styles.homepage}>
    <Directory></Directory>
  </div>;
};

export default HomePage;
