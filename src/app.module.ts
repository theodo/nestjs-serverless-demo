import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';
import { PhotoModule } from './photo/photo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Photo } from './photo/photo.entity'

import "./typeorm-patch";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": process.env.TYPEORM_HOST,
      "port": 5432,
      "username": process.env.TYPEORM_USERNAME,
      "password": process.env.TYPEORM_PASSWORD,
      "database": process.env.TYPEORM_DATABASE,
      "entities": [Photo],
      "synchronize": true,
      "keepConnectionAlive": true,
      "logging": ["query", "error", "log", "warn", "info", "schema"]
    }),
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor() {
    console.error("We are here inside App module")
  }
}
