import React from "react";

interface Props {
  header: string;
}

const FormContainer: React.FC<Props> = ({ children, header }) => {
  return (
    <>
      <div>
        <h1>{header}</h1>
        {children}
      </div>

      <style jsx>{`
        h1 {
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        div {
          display: flex;
          flex-direction: column;
          width: 50%;
          justify-content: center;
          align-items: center;
          padding: 10vw;
        }
      `}</style>
    </>
  );
};

export default FormContainer;
