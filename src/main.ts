import * as dotenv from 'dotenv-safe';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.error("******************", process.env.ENV)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
