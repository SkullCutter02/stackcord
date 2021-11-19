import React from "react";

interface Props {
  header: string;
  handleSubmit: any;
  submitFn: (...any) => any;
}

const FormContainer: React.FC<Props> = ({
  children,
  header,
  handleSubmit,
  submitFn,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit(submitFn)}>
        <h1>{header}</h1>
        {children}
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
      `}</style>
    </>
  );
};

export default FormContainer;
