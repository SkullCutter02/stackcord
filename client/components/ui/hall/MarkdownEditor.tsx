import React, { Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface Props {
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
}

const MarkdownEditor: React.FC<Props> = ({ body, setBody }) => {
  return (
    <>
      <MDEditor
        value={body}
        onChange={setBody}
        height={350}
        style={{ marginBottom: "20px" }}
      />
    </>
  );
};

export default MarkdownEditor;
