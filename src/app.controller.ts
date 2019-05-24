import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.error("We are here inside App module")
    console.error("App service", AppService)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
