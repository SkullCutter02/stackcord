import React, { useState } from "react";

import MarkdownEditor from "../../../../../components/ui/hall/MarkdownEditor";
import PrimaryTextInput from "../../../../../components/widgets/PrimaryTextInput";
import Whiteboard from "../../../../../components/ui/hall/Whiteboard";

const CreateQuestionPage: React.FC = () => {
  const [body, setBody] = useState<string>("**Hello World!**");

  return (
    <>
      <form>
        <h1>CREATE QUESTION</h1>
        <PrimaryTextInput
          placeholder={"Title: "}
          name={"title"}
          margin={"0 0 25px 0"}
        />
        <Whiteboard />
        <MarkdownEditor body={body} setBody={setBody} />
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
