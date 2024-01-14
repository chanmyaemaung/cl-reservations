import { NestFactory } from "@nestjs/core";
import { ReservationsModule } from "./reservations.module";
import { ValidationPipe } from "@nestjs/common";
import { Logger } from "nestjs-pino";

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.getHttpAdapter().getInstance().disable("x-powered-by");
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
