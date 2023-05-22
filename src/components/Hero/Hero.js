import styles from "./Hero.module.css";

import hero from "../../assets/images/heyfoods-hero-side2.svg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textArea}>
        <h1 className={styles.heroText}>
          Your food <span>delivered</span> within minutes.
        </h1>
        <div className={styles.autocompleteDiv}></div>
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
