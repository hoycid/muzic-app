import classes from "./EnrollForm.module.css";

const EnrollForm = () => {
  return (
    <div className={classes["enroll-form"]}>
      <form>
        <h3>SCHEDULE A SESSION</h3>
        <input type="text" placeholder="Student Name" />
        <input type="number" placeholder="Student Age" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input placeholder="Location" />
        <input placeholder="Instrument" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnrollForm;
