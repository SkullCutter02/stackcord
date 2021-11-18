import React from "react";

import FormContainer from "./FormContainer";
import PrimaryTextInput from "../../widgets/PrimaryTextInput";
import RoundedButton from "../../widgets/RoundedButton";

const CreateAccountForm: React.FC = () => {
  return (
    <>
      <FormContainer header={"Create Account"}>
        <PrimaryTextInput
          placeholder={"What's your name?"}
          margin={"0 0 25px 0"}
          width={"60%"}
        />
        <PrimaryTextInput
          placeholder={"What's your email?"}
          margin={"0 0 25px 0"}
          inputType={"email"}
          width={"60%"}
        />
        <PrimaryTextInput
          placeholder={"What's your password?"}
          margin={"0 0 25px 0"}
          inputType={"password"}
          width={"60%"}
        />
        <RoundedButton
          buttonText={"Sign Up"}
          buttonColor={"secondary"}
          width={"30%"}
          minWidth={"100px"}
          buttonType={"submit"}
        />
      </FormContainer>

      <style jsx>{`
        button {
          background: var(--secondaryColor);
          padding: 17px 25px;
          border: none;
          border-radius: 200px;
          text-transform: uppercase;
          width: 40%;
        }
      `}</style>
    </>
  );
};

export default CreateAccountForm;
