import React from "react";
import CreateAccountForm from "./CreateAccountForm";
import LoginForm from "./LoginForm";

const HomePageContainer: React.FC = () => {
  return (
    <>
      <main>
        <CreateAccountForm />
        <div className="divider" />
        <LoginForm />
      </main>

      <style jsx>{`
        main {
          display: flex;
          height: 100vh;
          padding: 5vh 0;
          align-items: center;
        }

        .divider {
          height: 80vh;
          background: var(--borderColor);
          width: 2px;
          border-radius: 1px;
        }
      `}</style>
    </>
  );
};

export default HomePageContainer;
