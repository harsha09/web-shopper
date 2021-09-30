import styles from "./collectionPreview.module.scss";
import CollectionItem from "../collectionItem/collectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles["title"]}>{title}</h1>
      <div className={styles["preview"]}>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...others }) => {
            return <CollectionItem key={`${title}-${id}`} {...others} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
