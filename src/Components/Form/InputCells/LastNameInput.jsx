import classes from "../InputForms.module.css";

const LastNameInput = (props) => {
  const lastNameChangeHandler = (e) => {
    let firstName = e.target.value;
    props.onLastNameChange(firstName);
  };

  return (
    <div className={classes["input-field"]}>
      <input
        placeholder="Last Name"
        className={`${classes["form-input"]} ${
          props.isLastNameValid ? "" : classes["form-invalid"]
        }`}
        onChange={lastNameChangeHandler}
      ></input>
      <p className={`${classes["error-msg"]} ${!props.isLastNameValid ? "" : classes['hidden']}`}>Last name cannot be empty</p>
    </div>
  );
};

export default LastNameInput;
