import styles from "./shopPage.module.scss";
import SHOP_DATA from "./shopPage.data";
import CollectionPreview from "../../components/collectionPreview/collectionPreview";

const ShopPage = () => {
  return (
    <div className={styles["shop-page"]}>
      {SHOP_DATA.map(({id, ...collection}) => (
        <CollectionPreview key={`collection-${id}`} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
