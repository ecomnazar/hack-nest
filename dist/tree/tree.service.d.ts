import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class TreeService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }[]>;
    getById(id: number): Prisma.Prisma__TreeClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(data: Prisma.TreeCreateInput): Prisma.Prisma__TreeClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.TreeUpdateInput): Prisma.Prisma__TreeClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    kill(id: number): Prisma.Prisma__TreeClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): Prisma.Prisma__TreeClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getTreesByLocationId(locationId: number): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }[]>;
    addImageUrlByTreeId(id: number, imgUrl: string): Prisma.Prisma__TreeClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imgUrl: string;
        species: string;
        age: number;
        lastWatered: Date;
        wateringFreq: number;
        pestResistance: boolean;
        diseaseResistance: boolean;
        sunlight: string;
        temperature: number;
        humidity: number;
        lastHarvest: Date | null;
        harvestQty: number | null;
        lastTreated: Date | null;
        status: import(".prisma/client").$Enums.TreeStatus;
        row: number;
        column: number;
        nameId: number;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    isPositionAvailable(locationId: number, row: number, column: number): Promise<boolean>;
}