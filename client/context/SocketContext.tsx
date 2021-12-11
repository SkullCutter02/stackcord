import React, { useEffect, useMemo } from "react";
import io from "socket.io-client";

import HOST from "../constants/host";
import { createContext } from "react";

export const SocketContext = createContext<SocketIOClient.Socket>(null);

export const SocketProvider: React.FC = ({ children }) => {
  const socket = useMemo(() => (typeof window !== "undefined" ? io.connect(HOST) : null), []);

  useEffect(() => {
    return () => {
      socket?.close();
    };
  }, []);

  return (
    <>
      <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    </>
  );
};
