import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import MarkdownEditor from "../../../../../components/ui/hall/MarkdownEditor";
import PrimaryTextInput from "../../../../../components/widgets/PrimaryTextInput";
import Whiteboard from "../../../../../components/ui/hall/Whiteboard";
import CreateQuestionFormInput from "../../../../../types/formInputs/createQuestionFormInput.interface";
import useCreateQuestion from "../../../../../hooks/useCreateQuestion";
import RoundedButton from "../../../../../components/widgets/RoundedButton";

const CreateQuestionPage: React.FC = () => {
  const [body, setBody] = useState<string>("**Hello World!**");
  const [saveableCanvas, setSaveableCanvas] = useState<CanvasDraw>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateQuestionFormInput>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().max(300).required(),
      })
    ),
  });

  const { createQuestion, isLoading, error } = useCreateQuestion(
    body,
    saveableCanvas
  );

  return (
    <>
      <form onSubmit={handleSubmit(createQuestion)}>
        <h1>CREATE QUESTION</h1>
        <PrimaryTextInput
          placeholder={"Title: "}
          name={"title"}
          margin={"0 0 25px 0"}
          register={register}
          error={errors.title}
        />
        <Whiteboard
          saveableCanvas={saveableCanvas}
          setSaveableCanvas={setSaveableCanvas}
        />
        <MarkdownEditor body={body} setBody={setBody} />
        <p className="err-msg" style={{ margin: "15px 0" }}>
          {error}
        </p>
        <RoundedButton
          buttonText={"Create Question"}
          buttonType={"submit"}
          buttonColor={"primary"}
          disabled={isLoading}
        />
      </form>

      <style jsx>{`
        h1 {
          font-family: var(--secondaryFont);
          font-size: 1.8rem;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default CreateQuestionPage;
