import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  placeholder: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  width?: string;
  minWidth?: string;
  required?: boolean;
  inputType?: HTMLInputTypeAttribute;
}

const PrimaryTextInput: React.FC<Props> = ({
  placeholder,
  backgroundColor = "var(--secondaryBackgroundColor)",
  borderColor = "var(--borderColor)",
  padding = "17px 25px",
  margin = "0",
  borderRadius = "200px",
  fontSize = "0.8rem",
  width = "100%",
  minWidth = "0",
  required = true,
  inputType = "text",
}) => {
  return (
    <>
      <input type={inputType} placeholder={placeholder} required={required} />

      <style jsx>{`
        input {
          background: ${backgroundColor};
          border: 2px solid ${borderColor};
          padding: ${padding};
          border-radius: ${borderRadius};
          font-size: ${fontSize};
          width: ${width};
          min-width: ${minWidth};
          margin: ${margin};
        }
      `}</style>
    </>
  );
};

export default PrimaryTextInput;
