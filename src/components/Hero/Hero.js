import styles from "./Hero.module.css";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import buttonStyles from "../../assets/ButtonStyle/ButtonStyle";
import hero from "../../assets/images/heyfoods-hero-side2.svg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textArea}>
        <h1 className={styles.heroText}>
          Your food <span>delivered</span> within minutes.
        </h1>
        <div className={styles.deliveryDiv}>
          <label htmlFor="location"></label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter delivery address"
          />
        </div>
      </div>
      <div className={styles.imageArea}>
        <img
          className={styles.heroImage}
          src={hero}
          alt="an image of a table set with different dishes digital art"
        />
      </div>
    </section>
  );
};

export default Hero;
