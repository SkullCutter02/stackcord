import React from "react";

import FormContainer from "./FormContainer";
import PrimaryTextInput from "../../widgets/PrimaryTextInput";
import RoundedButton from "../../widgets/RoundedButton";

const LoginForm: React.FC = () => {
  return (
    <>
      <FormContainer header={"Login"}>
        <PrimaryTextInput
          placeholder={"What's your name?"}
          margin={"0 0 25px 0"}
        />
        <PrimaryTextInput
          placeholder={"What's your password?"}
          margin={"0 0 25px 0"}
          inputType={"password"}
        />
        <RoundedButton
          buttonText={"Sign In"}
          buttonColor={"primary"}
          width={"40%"}
          buttonType={"submit"}
        />
      </FormContainer>
    </>
  );
};

export default LoginForm;
