import React from "react";
import io from "socket.io-client";

import HOST from "../constants/host";
import { createContext } from "react";

const socket = io.connect(HOST);
export const SocketContext = createContext<SocketIOClient.Socket>(null);

export const SocketProvider: React.FC = ({ children }) => {
  return (
    <>
      <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    </>
  );
};
