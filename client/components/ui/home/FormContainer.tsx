import React, { MutableRefObject } from "react";

interface Props {
  header: string;
  handleSubmit: any;
  submitFn: (...any) => any;
  error: string;
}

const FormContainer: React.FC<Props> = ({
  children,
  header,
  handleSubmit,
  submitFn,
  error,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit(submitFn)}>
        <h1>{header}</h1>
        {children}
        <p className="err-msg">{error}</p>
      </form>

      <style jsx>{`
        h1 {
          text-transform: uppercase;
          margin-bottom: 25px;
          font-family: var(--secondaryFont);
          font-size: calc(1.2em + 1vw);
          text-align: center;
          white-space: nowrap;
        }

        form {
          display: flex;
          flex-direction: column;
          width: 50%;
          justify-content: center;
          align-items: center;
        }

        .err-msg {
          margin-top: 15px;
        }
      `}</style>
    </>
  );
};

export default FormContainer;
