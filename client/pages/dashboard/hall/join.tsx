import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import JoinOrCreateHallContainer from "../../../components/ui/hall/JoinOrCreateHallContainer";
import PrimaryTextInput from "../../../components/widgets/PrimaryTextInput";
import RoundedButton from "../../../components/widgets/RoundedButton";
import JoinHallFormInput from "../../../types/formInputs/joinHallFormInput.interface";
import useJoinHall from "../../../hooks/useJoinHall";

const JoinHallPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<JoinHallFormInput>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        code: yup
          .string()
          .matches(/^[a-zA-Z0-9]+$/, {
            message: "Code must only contain alphanumerics",
          })
          .required(),
      })
    ),
  });

  const { isLoading, error, joinHall } = useJoinHall();

  return (
    <>
      <JoinOrCreateHallContainer
        handleSubmit={handleSubmit}
        submitFn={joinHall}
        type={"join"}
      >
        <PrimaryTextInput
          placeholder={"Enter hall code here..."}
          name={"code"}
          margin={"20px 0 20px 0"}
          width={"40%"}
          backgroundColor={"var(--primaryBackgroundColor)"}
          register={register}
          error={errors.code}
        />
        <RoundedButton
          buttonText={"Join"}
          buttonType={"submit"}
          width={"initial"}
          padding={"12px 30px"}
          buttonColor={"primary"}
          fontSize={0.9}
          disabled={isLoading}
        />
        {error && (
          <p style={{ marginTop: "20px" }} className="err-msg">
            {error}
          </p>
        )}
        <Link href={"/dashboard/hall/create"}>
          <p className="redirect-to-create">Want to create one instead?</p>
        </Link>
      </JoinOrCreateHallContainer>

      <style jsx>{`
        .redirect-to-create {
          font-size: 0.8rem;
          color: var(--secondaryTextColor);
          margin: 20px 0;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default JoinHallPage;
