import classes from "./Section.module.css";

const Section = props => {
  return (
    <div
      className={`${classes.section} ${props.className} `}
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      {props.children}
    </div>
  );
};

export default Section;
