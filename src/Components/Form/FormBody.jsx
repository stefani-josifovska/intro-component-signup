import React, { useState } from "react";
import validator from "validator";

import classes from "./FormBody.module.css";
import btnClasses from "./ClaimFreeTrialBtn.module.css";
import InputForms from "./InputForms";

let userData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const FormBody = () => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  let firstNameCheck = false;
  let lastNameCheck = false;
  let emailCheck = false;
  let passwordCheck = false; 

  const formRef = React.createRef();

  const getFirstName = (firstName) => userData = { ...userData, firstName: firstName };
  const getLastName = (lastName) => userData = { ...userData, lastName: lastName };    
  const getEmail = (email) => userData = { ...userData, email: email };
  const getPassword = (password) => userData = { ...userData, password: password };

  const checkInfo = (e) => {
    e.preventDefault();

    firstNameCheck= !(validator.isEmpty(userData.firstName));
    lastNameCheck = !(validator.isEmpty(userData.lastName));
    emailCheck = validator.isEmail(userData.email);
    passwordCheck = !(validator.isEmpty(userData.password));

    setIsFirstNameValid(firstNameCheck);
    setIsLastNameValid(lastNameCheck);
    setIsEmailValid(emailCheck);
    setIsPasswordValid(passwordCheck);

    if (firstNameCheck && lastNameCheck && emailCheck && passwordCheck) {
      for (let i=0; i<=4; i++) {
        formRef.current[i].value="";
        userData = { firstName: "", lastName: "", email: "", password: ""}
      }
    }
  };

  return (
    <div className={classes.wrap}>
      <form className={classes.form} onSubmit={checkInfo} ref={formRef} >
        <InputForms
          firstNameValidation={getFirstName}
          lastNameValidation={getLastName}
          emailValidation={getEmail}
          passwordValidation={getPassword}
          isFirstNameValid={isFirstNameValid}
          isLastNameValid={isLastNameValid}
          isEmailValid={isEmailValid}
          isPasswordValid={isPasswordValid}
        />
        <div>
          <button type="submit" className={btnClasses["free-trial-button"]}>
            CLAIM YOUR FREE TRIAL
          </button>
        </div>
      </form>
      <h6>
        By clicking the button, you are agreeing to our{" "}
        <a href="">Terms and Services</a>
      </h6>
    </div>
  );
};

export default FormBody;
