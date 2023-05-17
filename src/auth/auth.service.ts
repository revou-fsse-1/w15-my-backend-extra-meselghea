import {
  Injectable, UnauthorizedException, NotFoundException,
}
from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
//import { ConfigService } from '@nestjs/config';
import { AuthEntity } from './entity/auth.entity';
import { jwtSecret } from './auth.module';
import * as bcryptjs from 'bcryptjs';
const saltRounds = 10;

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService, private user: UsersService) {}
  
  async signup(createUserDto: CreateUserDto ) {
     const salt = await bcryptjs.genSalt(saltRounds);
     const hashedPassword = await bcryptjs.hash( createUserDto.password, salt );

    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}