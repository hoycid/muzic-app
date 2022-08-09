import classes from "./Navbar.module.css";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className={classes["navigation-bar"]}>
      <img src={logo} alt="muzic-logo"></img>
      <ul>
        <li>Music lessons</li>
        <li>Workshops</li>
        <li>Events</li>
        <li>Schedules</li>
      </ul>
    </header>
  );
};

export default Navbar;
