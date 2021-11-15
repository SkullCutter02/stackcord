import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";

import { HallService } from "./hall.service";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { CreateHallDto } from "./dto/createHall.dto";

@Controller("hall")
export class HallController {
  constructor(private readonly hallService: HallService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createHall(@Req() req: ReqWithUser, @Body() createPostDto: CreateHallDto) {
    return this.hallService.createHall(createPostDto, req.user);
  }
}
