import React from "react";

import CreateAccountForm from "./CreateAccountForm";

const HomePageContainer: React.FC = () => {
  return (
    <>
      <main>
        <CreateAccountForm />
      </main>

      <style jsx>{`
        main {
          display: flex;
          height: 100vh;
          padding: 5vh 0;
        }
      `}</style>
    </>
  );
};

export default HomePageContainer;
