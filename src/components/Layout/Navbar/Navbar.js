import classes from "./Navbar.module.css";

import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className={classes["navigation-bar"]}>
      <img src={logo} alt="muzic-logo"></img>
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
