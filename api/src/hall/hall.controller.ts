import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Req, UseGuards } from "@nestjs/common";

import { HallService } from "./hall.service";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { CreateHallDto } from "./dto/createHall.dto";
import { PatchHallDto } from "./dto/patchHall.dto";
import { MakeUserTeacherDto } from "./dto/makeUserTeacher.dto";
import { IsUserTeacherInHallGuard } from "./guards/isUserTeacherInHall.guard";
import { IsUserInHallGuard } from "./guards/isUserInHall.guard";

@Controller("hall")
export class HallController {
  constructor(private readonly hallService: HallService) {}

  @Get("/:id")
  getHall(@Param("id", ParseUUIDPipe) hallId: string) {
    return this.hallService.getHall(hallId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getUserHalls(@Req() req: ReqWithUser) {
    return this.hallService.getUserHalls(req.user.id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createHall(@Req() req: ReqWithUser, @Body() createHallDto: CreateHallDto) {
    return this.hallService.createHall(createHallDto, req.user);
  }

  @Post("/:code/join")
  @UseGuards(JwtAuthGuard)
  joinHall(@Param("code") code: string, @Req() req: ReqWithUser) {
    return this.hallService.joinHall(code, req.user);
  }

  @Patch("/:id")
  @UseGuards(JwtAuthGuard, IsUserTeacherInHallGuard)
  editHall(
    @Param("id", ParseUUIDPipe) hallId: string,
    @Req() req: ReqWithUser,
    @Body() patchHallDto: PatchHallDto
  ) {
    return this.hallService.editHall(hallId, req.user, patchHallDto);
  }

  @Patch("/:id/teacher")
  @UseGuards(JwtAuthGuard, IsUserTeacherInHallGuard)
  makeUserTeacher(
    @Param("id", ParseUUIDPipe) hallId: string,
    @Req() req: ReqWithUser,
    @Body() makeUserTeacherDto: MakeUserTeacherDto
  ) {
    return this.hallService.makeUserTeacher(hallId, req.user, makeUserTeacherDto);
  }

  @Delete("/:id")
  @UseGuards(JwtAuthGuard, IsUserTeacherInHallGuard)
  deleteHall(@Param("id", ParseUUIDPipe) hallId: string, @Req() req: ReqWithUser) {
    return this.hallService.deleteHall(hallId, req.user);
  }
}
