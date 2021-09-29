import styles from "./directory.module.scss";
import MenuItem from "../menuItem/menuItem";

const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    key: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    key: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    key: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    key: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    key: 5,
    linkUrl: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className={styles["directory-menu"]}>
      {sections.map((menuProps) => (
        <MenuItem {...menuProps}></MenuItem>
      ))}
    </div>
  );
};

export default Directory;
