import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LocationsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Prisma.PrismaPromise<{
        name: string;
        id: number;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: number): Prisma.Prisma__LocationClient<{
        name: string;
        id: number;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(data: Prisma.LocationCreateInput): Prisma.Prisma__LocationClient<{
        name: string;
        id: number;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.LocationUpdateInput): Prisma.Prisma__LocationClient<{
        name: string;
        id: number;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): Prisma.Prisma__LocationClient<{
        name: string;
        id: number;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
