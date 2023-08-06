import { Fragment } from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  const imageURL = "https://cdn.wallpapersafari.com/17/80/BaPHpM.jpg";

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Tools</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={imageURL} alt="Tools background" />
      </div>
    </Fragment>
  );
};

export default Header;
