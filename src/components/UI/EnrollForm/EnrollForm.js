import classes from "./EnrollForm.module.css";

const EnrollForm = () => {
  return (
    <div className={classes["enroll-form"]}>
      <form>
        <h3>SCHEDULE A SESSION</h3>
        <input type="text" placeholder="Student Name" />
        <input type="number" placeholder="Student Age" min="1" max="80" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input placeholder="Address" />
        <select>
          <option>Guitar</option>
          <option>Piano</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnrollForm;
