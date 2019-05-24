import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';
// import { PhotoModule } from './photo/photo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor() {
    console.error("We are here inside App module")
  }
}
