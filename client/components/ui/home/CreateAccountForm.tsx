import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import FormContainer from "./FormContainer";
import PrimaryTextInput from "../../widgets/PrimaryTextInput";
import RoundedButton from "../../widgets/RoundedButton";
import CreateAccountFormInput from "../../../types/formInputs/createAccountFormInput.interface";

const CreateAccountForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormInput>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required().max(30),
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

  const createAccount = (input: CreateAccountFormInput) => {
    console.log(input);
  };

  return (
    <>
      <FormContainer
        header={"Create Account"}
        handleSubmit={handleSubmit}
        submitFn={createAccount}
      >
        <PrimaryTextInput
          placeholder={"What's your name?"}
          margin={"0 0 25px 0"}
          width={"60%"}
          name={"name"}
          register={register}
          error={errors.name}
        />
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
