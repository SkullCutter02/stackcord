import React from "react";

interface Props {
  buttonText: string;
  buttonColor: "primary" | "secondary" | string;
  disabled?: boolean;
  padding?: string;
  borderRadius?: string;
  width?: string;
  buttonType?: "button" | "submit" | "reset";
  textTransform?: "initial" | "uppercase";
  hasBorder?: boolean;
  fontWeight?: number;
  minWidth?: string;
  fontSize?: number;
}

const RoundedButton: React.FC<Props> = ({
  buttonColor,
  buttonText,
  disabled,
  padding = "17px 25px",
  borderRadius = "200px",
  width = "initial",
  buttonType = "button",
  textTransform = "uppercase",
  hasBorder = false,
  fontWeight = 400,
  minWidth = "0",
  fontSize = 1,
}) => {
  const color =
    buttonColor === "primary"
      ? "var(--primaryColor)"
      : buttonColor === "secondary"
      ? "var(--secondaryColor)"
      : buttonColor;

  return (
    <>
      <button type={buttonType} disabled={disabled}>
        {buttonText}
      </button>

      <style jsx>{`
        button {
          background: ${color};
          padding: ${padding};
          border: ${hasBorder ? "initial" : "none"};
          border-radius: ${borderRadius};
          text-transform: ${textTransform};
          width: ${width};
          font-family: var(--secondaryFont);
          font-weight: ${fontWeight};
          min-width: ${minWidth};
          font-size: ${fontSize}rem;
        }
      `}</style>
    </>
  );
};

export default RoundedButton;
