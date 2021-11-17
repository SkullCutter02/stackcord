import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

import { AnswerService } from "./answer.service";
import { WsAnswerBody } from "../types/wsAnswerBody.interface";

@WebSocketGateway()
export class AnswerGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly answerService: AnswerService) {}

  async handleConnection(socket: Socket) {
    await this.answerService.getUserFromSocket(socket);
  }

  @SubscribeMessage("join_question_room")
  joinRoom(@MessageBody() roomId: string, @ConnectedSocket() socket: Socket) {
    socket.join(roomId);
  }

  @SubscribeMessage("leave_question_room")
  leaveRoom(@MessageBody() roomId: string, @ConnectedSocket() socket: Socket) {
    socket.leave(roomId);
  }

  @SubscribeMessage("send_answer")
  async listenForMessages(@MessageBody() content: WsAnswerBody, @ConnectedSocket() socket: Socket) {
    const author = await this.answerService.getUserFromSocket(socket);
    const answer = await this.answerService.createAnswer(author, {
      body: content.body,
      whiteboard: content.whiteboard,
      questionId: content.roomId,
    });

    this.server.sockets.to(content.roomId).emit("receive_answer", answer);
  }
}
