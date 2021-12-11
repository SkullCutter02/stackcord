import React, { createContext, MutableRefObject, useRef } from "react";

export const ContentRefContext = createContext<MutableRefObject<HTMLDivElement>>(null);

export const ContentRefProvider: React.FC = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ContentRefContext.Provider value={contentRef}>{children}</ContentRefContext.Provider>
    </>
  );
};
