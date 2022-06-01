// import { useState } from 'react';
import EmailInput from "./InputCells/EmailInput";
import FirstNameInput from "./InputCells/FirstNameInput";
import LastNameInput from "./InputCells/LastNameInput";
import PasswordInput from "./InputCells/PasswordInput";

const InputForms = (props) => {
  const passFirstName = (firstName) => props.firstNameValidation(firstName);
  const passLastName = (lastName) => props.lastNameValidation(lastName);
  const passEmail = (email) => props.emailValidation(email);
  const passPassword = (password) => props.passwordValidation(password);

  return (
    <div>
      <FirstNameInput
        onFirstNameChange={passFirstName}
        isFirstNameValid={props.isFirstNameValid}
      />
      <LastNameInput
        onLastNameChange={passLastName}
        isLastNameValid={props.isLastNameValid}
      />
      <EmailInput onEmailChange={passEmail} isEmailValid={props.isEmailValid} isFormFalid={props.isFormValidPass} />
      <PasswordInput onPasswordChange={passPassword} isPasswordValid={props.isPasswordValid} />
    </div>
  );
};

export default InputForms;
