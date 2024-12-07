import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/CreateLocationDto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    getAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createLocationDto: CreateLocationDto): import(".prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateLocation(id: number, updateLocation: CreateLocationDto): import(".prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        description: string | null;
        lat: number;
        lng: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
