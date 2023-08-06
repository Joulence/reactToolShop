import { Fragment } from "react";
import styles from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const imageURL = "https://cdn.wallpapersafari.com/17/80/BaPHpM.jpg";

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Tools</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={imageURL} alt="Tools background" />
      </div>
    </Fragment>
  );
};

export default Header;
