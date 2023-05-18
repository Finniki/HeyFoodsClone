import styles from "./Header.module.css";
import logo from "../../assets/images/heyfoodlogo2.png";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img src={logo} className={styles.brandLogo} alt="HeyFoods logo" />
        </div>
        <nav className={styles.signBtns}>
          {/* <button class={`${styles.signIn} ${styles.button}`}>Sign In</button>
          <button class={`${styles.signUp} ${styles.button}`}>Sign Up</button> */}
          <Button
            variant="text"
            className={`${styles.button} ${styles.signIn}`}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            disableElevation
            className={`${styles.button} ${styles.signUp}`}
          >
            Sign Up
          </Button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
