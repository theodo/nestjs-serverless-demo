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
      "host": "nestjs-auth-db.cnwkyvzcifyp.us-east-1.rds.amazonaws.com",
      "port": 5432,
      "username": "jeand",
      "password": "klmserverless",
      "database": "authApi",
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
