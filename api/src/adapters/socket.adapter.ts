import { IoAdapter } from "@nestjs/platform-socket.io";
import { ServerOptions } from "socket.io";

export class SocketAdapter extends IoAdapter {
  createIOServer(
    port: number,
    options?: ServerOptions & {
      namespace?: string;
      server?: any;
    }
  ) {
    return super.createIOServer(port, {
      ...options,
      cors: { origin: [process.env.FRONTEND_URL], credentials: true, transports: ["websocket", "polling"] },
      allowEIO3: true,
    });
  }
}
