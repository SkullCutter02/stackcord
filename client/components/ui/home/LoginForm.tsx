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
          width={"60%"}
        />
        <PrimaryTextInput
          placeholder={"What's your password?"}
          margin={"0 0 25px 0"}
          inputType={"password"}
          width={"60%"}
        />
        <RoundedButton
          buttonText={"Sign In"}
          buttonColor={"primary"}
          width={"30%"}
          minWidth={"100px"}
          buttonType={"submit"}
        />
      </FormContainer>
    </>
  );
};

export default LoginForm;
