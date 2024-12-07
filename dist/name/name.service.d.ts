import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class NameService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Prisma.PrismaPromise<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getNameById(id: number): Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createName(data: Prisma.NameCreateInput): Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateName(id: number, data: Prisma.NameUpdateInput): Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    deleteNameById(id: number): Prisma.Prisma__NameClient<{
        name: string;
        id: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
