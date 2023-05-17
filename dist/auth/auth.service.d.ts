import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthEntity } from './entity/auth.entity';
export declare class AuthService {
    private prisma;
    private jwtService;
    private user;
    constructor(prisma: PrismaService, jwtService: JwtService, user: UsersService);
    signup(createUserDto: CreateUserDto): Promise<import("@prisma/client").User>;
    login(email: string, password: string): Promise<AuthEntity>;
}
