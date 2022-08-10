import classes from "./Footer.module.css";

import logo from "../../../assets/images/logo.jpg";

const Footer = props => {
  return (
    <div className={classes.footer}>
      <img className={classes.logo} src={logo} alt="Muzic Logo"></img>
      <div className={classes.modules}>
        <h3>Modules</h3>
        <ul>
          <li>
            <button>Piano</button>
          </li>
          <li>
            <button>Guitar</button>
          </li>
          <li>
            <button>Saxophone</button>
          </li>
          <li>
            <button>Violin</button>
          </li>
          <li>
            <button>Ukulele</button>
          </li>
        </ul>
      </div>
      <div className={classes["music-lessons"]}>
        <h3>Music Lessons</h3>
        <ul>
          <li>
            <button>Piano Lessons</button>
          </li>
          <li>
            <button>Guitar Lessons</button>
          </li>
          <li>
            <button>Voice Lessons</button>
          </li>
          <li>
            <button>Drum Lessons</button>
          </li>
          <li>
            <button>Saxophone Lessons</button>
          </li>
          <li>
            <button>Trumpet Lessons</button>
          </li>
          <li>
            <button>Flute Lessons</button>
          </li>
        </ul>
      </div>
      <div className={classes.information}>
        <ul>
          <li>
            <button>Workshops</button>
          </li>
          <li>
            <button>Events</button>
          </li>
          <li>
            <button>News</button>
          </li>
          <li>
            <button>Resources</button>
          </li>
        </ul>
      </div>
      <div className={classes["contact-info"]}>
        <ul>
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Privacy Policy</button>
          </li>
          <li>
            <button>Partners</button>
          </li>
        </ul>
      </div>
      <div className={classes["get-in-touch"]}>
        <div className={classes.message}>
          <h3>Contact us</h3>
          <p>Email</p>
          <input type="text" />
          <p>Message</p>
          <textarea />
          <button type="submit">Send</button>
        </div>
        <div className={classes.socials}>
          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="instagram" />
        </div>
        <p className={classes.notice}>
          2022 Muzic Malaybalay Sound Studio All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
