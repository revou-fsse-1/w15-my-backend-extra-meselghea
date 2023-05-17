import { User } from '@prisma/client';
export declare class UserEntity implements User {
    constructor(partial: Partial<UserEntity>);
    id: number;
    email: string;
    username: string;
    password: string;
    isAdmin: true | false;
}
