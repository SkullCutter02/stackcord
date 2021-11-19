import React from "react";

const Aside: React.FC = () => {
  return (
    <>
      <aside></aside>

      <style jsx>{`
        aside {
          float: right;
          height: calc(100vh - 100px);
          width: 25vw;
          background: var(--secondaryBackgroundColor);
          border-left: 2px solid #383838;
          padding: 40px;
        }
      `}</style>
    </>
  );
};

export default Aside;
