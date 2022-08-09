import classes from "./FeaturedText.module.css";

const FeaturedText = props => {
  return (
    <section className={classes["featured-text"]}>
      <h2>{props.text}</h2>
    </section>
  );
};

export default FeaturedText;
