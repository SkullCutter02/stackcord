import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import JoinOrCreateHallContainer from "../../../components/ui/hall/JoinOrCreateHallContainer";
import PrimaryTextInput from "../../../components/widgets/PrimaryTextInput";
import RoundedButton from "../../../components/widgets/RoundedButton";
import CreateHallFormInput from "../../../types/formInputs/createHallFormInput.interface";
import useCreateHall from "../../../hooks/useCreateHall";

const CreateHallPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateHallFormInput>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().max(20).required(),
      })
    ),
  });

  const { createHall, isLoading, error } = useCreateHall();

  return (
    <>
      <JoinOrCreateHallContainer
        handleSubmit={handleSubmit}
        submitFn={createHall}
        type={"create"}
      >
        <PrimaryTextInput
          placeholder={"Enter hall name here..."}
          name={"name"}
          margin={"20px 0 20px 0"}
          width={"40%"}
          backgroundColor={"var(--primaryBackgroundColor)"}
          register={register}
          error={errors.name}
        />
        <RoundedButton
          buttonText={"Create"}
          buttonType={"submit"}
          width={"initial"}
          padding={"12px 30px"}
          buttonColor={"secondary"}
          fontSize={0.9}
          disabled={isLoading}
        />
        {error && (
          <p style={{ marginTop: "20px" }} className="err-msg">
            {error}
          </p>
        )}
      </JoinOrCreateHallContainer>
    </>
  );
};

export default CreateHallPage;
