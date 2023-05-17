import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(CreateProductDto: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    findAll(query: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Product[]>;
    findOne(id: number): Promise<import("@prisma/client").Product>;
    update(id: number, updateProductDto: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
}
