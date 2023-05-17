import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("@prisma/client").User>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    findByUsername(username: string, email: string): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
}
