import { Controller, Get, UseGuards, Request  } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard, } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth  } from '@nestjs/swagger';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getHelloUser(@Request() req): string {
  return this.appService.getHello(req.user.username);
  }
}
