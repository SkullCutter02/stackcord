import React from "react";

const CreateAccountForm: React.FC = () => {
  return (
    <>
      <div className="create-account-form">
        <h1>Create Account</h1>
        <input type="text" placeholder={"What will your username be?"} />
        <input type="text" placeholder={"What will your password be?"} />
        <button>Sign Up</button>
      </div>

      <style jsx>{`
        .create-account-form {
          display: flex;
          flex-direction: column;
          width: 50%;
          justify-content: center;
          align-items: center;
          padding: 10vw;
        }

        .create-account-form > * {
          margin-bottom: 25px;
        }

        input {
          background: var(--secondaryBackgroundColor);
          border: 2px solid var(--borderColor);
          padding: 25px 25px;
          border-radius: 200px;
          font-size: 0.8rem;
          width: 100%;
        }

        h1 {
          text-transform: uppercase;
        }

        button {
          background: var(--secondaryColor);
          padding: 25px 25px;
          border: none;
          border-radius: 200px;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

export default CreateAccountForm;
