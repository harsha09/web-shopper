import styles from "./collectionItem.module.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className={styles["collection-item"]}>
      <div
        className={styles["image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles["collection-footer"]}>
        <span className={styles["name"]}>{name}</span>
        <span className={styles["price"]}>${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
