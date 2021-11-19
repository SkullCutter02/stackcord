import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import FormContainer from "./FormContainer";
import PrimaryTextInput from "../../widgets/PrimaryTextInput";
import RoundedButton from "../../widgets/RoundedButton";
import LogInFormInput from "../../../types/formInputs/logInFormInput.interface";
import useLogin from "../../../hooks/useLogin";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormInput>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })
    ),
  });

  const { login } = useLogin();

  return (
    <>
      <FormContainer
        header={"Login"}
        handleSubmit={handleSubmit}
        submitFn={login}
      >
        <PrimaryTextInput
          placeholder={"What's your email?"}
          margin={"0 0 25px 0"}
          inputType={"email"}
          width={"60%"}
          name={"email"}
          register={register}
          error={errors.email}
        />
        <PrimaryTextInput
          placeholder={"What's your password?"}
          margin={"0 0 25px 0"}
          inputType={"password"}
          width={"60%"}
          name={"password"}
          register={register}
          error={errors.password}
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
