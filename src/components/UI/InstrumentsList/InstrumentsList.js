import classes from "./InstrumentsList.module.css";

const InstrumentsList = props => {
  return (
    <div className={classes.instruments}>
      <ul>
        <li>
          <button>Piano</button>
        </li>
        <li>
          <button>Violin</button>
        </li>
        <li>
          <button>Ukulele</button>
        </li>
        <li>
          <button>Guitar</button>
        </li>
        <li>
          <button>Saxophone</button>
        </li>
        <li>
          <button>Trumpet</button>
        </li>
        <li>
          <button>Flute</button>
        </li>
        <li>
          <button>Voice</button>
        </li>
        <li>
          <button>Drums</button>
        </li>
      </ul>
    </div>
  );
};

export default InstrumentsList;
