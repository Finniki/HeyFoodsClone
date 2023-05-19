import styles from "./Hero.module.css";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import hero from "../../assets/images/heyfoods-hero-side2.svg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textArea}>
        <h1>
          Your food <span>delivered</span> within minutes
        </h1>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          //   options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter delivery location"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
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
