import classes from "./Banner.module.css";
import EnrollForm from "../EnrollForm/EnrollForm";

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes["banner-text"]}>
        <h3>consectetur adipiscing elit</h3>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      </div>
      <EnrollForm />
    </section>
  );
};

export default Banner;
