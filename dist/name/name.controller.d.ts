import { NameService } from './name.service';
import { CreateNameDto } from './dto/CreateName.dto';
export declare class NameController {
    private readonly nameService;
    constructor(nameService: NameService);
    getAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createName(createNameDto: CreateNameDto): import(".prisma/client").Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateName(id: number, createNameDto: CreateNameDto): import(".prisma/client").Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): void;
}
