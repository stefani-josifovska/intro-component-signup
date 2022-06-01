import classes from "../InputForms.module.css";
import React from "react";

const FirstNameInput = (props) => {
  const firstNameChangeHandler = (e) => {
    let firstName = e.target.value;
    props.onFirstNameChange(firstName);
  };

  return (
    <div className={classes["input-field"]}>
      <input
        placeholder="First Name"
        className={`${classes["form-input"]} ${
          props.isFirstNameValid ? "" : classes["form-invalid"]
        }`}
        onChange={firstNameChangeHandler}
      ></input>
      <p
        className={`${classes["error-msg"]} ${
          !props.isFirstNameValid ? "" : classes["hidden"]
        }`}
      >
        First name cannot be empty
      </p>
    </div>
  );
};

export default FirstNameInput;
