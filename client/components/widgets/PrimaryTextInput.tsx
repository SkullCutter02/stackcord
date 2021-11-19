import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  placeholder: string;
  name: string;
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
  register?: any;
  error?: {
    message?: string;
  };
}

const PrimaryTextInput: React.FC<Props> = ({
  placeholder,
  name,
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
  register,
  error,
}) => {
  return (
    <>
      <div>
        <input
          className={error?.message && "invalid"}
          type={inputType}
          name={name}
          placeholder={placeholder}
          required={required}
          {...(register && register(name))}
        />
        <p className="err-msg">{error?.message}</p>
      </div>

      <style jsx>{`
        div {
          margin: ${margin};
          width: ${width};
          min-width: ${minWidth};
        }

        input {
          background: ${backgroundColor};
          border: 2px solid ${borderColor};
          padding: ${padding};
          border-radius: ${borderRadius};
          font-size: ${fontSize};
          width: 100%;
        }

        input.invalid {
          border-color: var(--errorColor);
        }

        .err-msg {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default PrimaryTextInput;
