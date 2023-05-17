import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("@prisma/client").User>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
}
