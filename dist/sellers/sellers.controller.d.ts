import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
export declare class SellersController {
    private readonly sellersService;
    constructor(sellersService: SellersService);
    create(createSellerDto: CreateSellerDto): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller, never>;
    findAll(query: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Seller[]>;
    findOne(id: number): Promise<import("@prisma/client").Seller & {
        products: import("@prisma/client").Product[];
    }>;
    update(id: number, updateSellerDto: UpdateSellerDto): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller, never>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__SellerClient<import("@prisma/client").Seller, never>;
}
