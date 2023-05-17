import { PassportSerializer } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";
export declare class sessionSerializer extends PassportSerializer {
    private readonly prisma;
    constructor(prisma: PrismaService);
    deserializeUser(payload: number, done: Function): Promise<void>;
    serializeUser(user: any, done: (err: Error, data: any) => void): any;
}
