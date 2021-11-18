import React from "react";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="create-account-form">
        <h1>Login</h1>
        <input type="text" placeholder={"What’s your username?"} />
        <input type="text" placeholder={"What’s your password?"} />
        <button>Sign In</button>
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
          padding: 17px 25px;
          border-radius: 200px;
          font-size: 0.8rem;
          width: 100%;
        }

        h1 {
          text-transform: uppercase;
        }

        button {
          background: var(--primaryColor);
          padding: 17px 25px;
          border: none;
          border-radius: 200px;
          text-transform: uppercase;
          width: 40%;
        }
      `}</style>
    </>
  );
};

export default LoginForm;
