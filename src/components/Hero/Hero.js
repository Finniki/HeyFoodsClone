import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles.textArea}>
        <h1>
          Your food<span>delivered</span> within minutes
        </h1>
      </div>
      <div className={styles.imageArea}></div>
    </section>
  );
};

export default Hero;
