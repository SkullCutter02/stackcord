import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import FormContainer from "./FormContainer";
import PrimaryTextInput from "../../widgets/PrimaryTextInput";
import RoundedButton from "../../widgets/RoundedButton";

interface FormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().max(50).required(),
        password: yup
          .string()
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "password needs to have a minimum of 8 characters, one letter and one number"
          )
          .max(100)
          .required(),
      })
    ),
  });

  const login = (input: FormInput) => {};

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
