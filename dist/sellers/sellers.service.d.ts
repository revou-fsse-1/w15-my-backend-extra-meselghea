import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SellersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSellerDto: CreateSellerDto): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller, never>;
    findAll(query: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Seller[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller & {
        products: import("@prisma/client").Product[];
    }, never>;
    update(id: number, updateSellerDto: UpdateSellerDto): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller, never>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller, never>;
}
