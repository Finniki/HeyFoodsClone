import styles from "./Header.module.css";
import logo from "../../assets/images/heyfoodlogo2.png";

const Header = () => {
  return (
    <div>
      <header class={styles.header}>
        <div class={styles.brand}>
          <img
            src="./images/heyfoodlogo2.png"
            class={styles.brandLogo}
            alt="HeyFoods logo"
          />
        </div>
        <nav class={styles.signBtns}>
          {/* <button class={`${styles.signIn} ${styles.button}`}>Sign In</button>
          <button class={`${styles.signUp} ${styles.button}`}>Sign Up</button> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
