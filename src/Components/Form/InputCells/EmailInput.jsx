import classes from "../InputForms.module.css";
import React from "react";

const EmailInput = (props, ref) => {
  const emailChangeHandler = (e) => {
    let email = e.target.value;
    props.onEmailChange(email);
  };

  return (
    <div className={classes["input-field"]}>
      <input
        placeholder="Email Address"
        className={`${classes["form-input"]} ${
        props.isEmailValid ? "" : classes["form-invalid"]
        }`}
        onChange={emailChangeHandler}
        type="text"
      ></input>
      <p
        className={`${classes["error-msg"]} ${
          !props.isEmailValid ? "" : classes["hidden"]
        }`}
      >
        Looks like this is not an email
      </p>
    </div>
  );
};

export default EmailInput;
