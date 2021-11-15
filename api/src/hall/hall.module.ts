import { Module } from "@nestjs/common";
import { ObjectionModule } from "@willsoto/nestjs-objection";

import { HallController } from "./hall.controller";
import { HallService } from "./hall.service";
import { Hall } from "./models/hall.model";
import { HallUser } from "./models/hallUser.model";

@Module({
  imports: [ObjectionModule.forFeature([Hall, HallUser])],
  controllers: [HallController],
  providers: [HallService],
})
export class HallModule {}
