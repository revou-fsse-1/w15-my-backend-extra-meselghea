import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    findAll(query: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Product[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    update(id: number, updateProductDto: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
}
