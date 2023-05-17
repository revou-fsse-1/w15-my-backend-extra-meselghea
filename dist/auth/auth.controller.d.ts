import { AuthService } from './auth.service';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Session as SessionType } from 'express-session';
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    signup(createUserDto: CreateUserDto): Promise<import("@prisma/client").User>;
    login({ email, password }: LoginDto): Promise<AuthEntity>;
    logout(session: SessionType, res: Response): void;
}
