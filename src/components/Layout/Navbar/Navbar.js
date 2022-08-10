import classes from "./Navbar.module.css";

import logo from "../../../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <header className={classes["navigation-bar"]}>
      <img className={classes.logo} src={logo} alt="muzic-logo" />
      <ul>
        <li>
          <button>Music lessons</button>
        </li>
        <li>
          <button>Workshops</button>
        </li>
        <li>
          <button>Events</button>
        </li>
        <li>
          <button>Schedules</button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
