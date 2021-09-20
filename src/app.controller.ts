import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('2')
  @Get('health')
  getHello(): string {
    return 'v2';
  }

  @Version('1')
  @Get('health')
  getHellov1(): string {
    return 'v1';
  }
}
