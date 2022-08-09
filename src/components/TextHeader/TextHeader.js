import classes from "./TextHeader.module.css";

const TextHeader = props => {
  return <div className={classes.text}>{props.children}</div>;
};

export default TextHeader;
