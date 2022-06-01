import classes from "../InputForms.module.css";

const PasswordInput = (props) => {
  const passwordChangeHandler = (e) => {
    let password = e.target.value;
    props.onPasswordChange(password);
  };

  return (
    <div className={classes["input-field"]}>
      <input
        placeholder="Password"
        type="password"
        className={`${classes["form-input"]} ${
          props.isPasswordValid ? "" : classes["form-invalid"]
        }`}
        onChange={passwordChangeHandler}
      ></input>
      <p
        className={`${classes["error-msg"]} ${
          !props.isPasswordValid ? "" : classes["hidden"]
        }`}
      >
        Password cannot be empty
      </p>
    </div>
  );
};

export default PasswordInput;
