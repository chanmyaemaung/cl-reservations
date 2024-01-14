import { DatabaseModule, LoggerModule } from "@app/common";
import { Module } from "@nestjs/common";
import { ReservationDocument, ReservationSchema } from "./models";
import { ReservationsRepository } from "./repository";
import { ReservationsController } from "./reservations.controller";
import { ReservationsService } from "./reservations.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
