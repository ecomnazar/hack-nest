import { TreeService } from './tree.service';
import { CreateTreeDto } from './dto/CreateTree.dto';
export declare class TreeController {
    private readonly treeService;
    constructor(treeService: TreeService);
    getAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__TreeClient<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createTreeDto: CreateTreeDto): import(".prisma/client").Prisma.Prisma__TreeClient<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getByLocationId(locationId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getImageUrl(id: number, body: {
        imgUrl: string;
    }): import(".prisma/client").Prisma.Prisma__TreeClient<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__TreeClient<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    killTree(id: number): import(".prisma/client").Prisma.Prisma__TreeClient<{
        id: number;
        locationId: number;
        nameId: number;
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
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    isPositionAvailable(locationId: number, row: number, column: number): Promise<boolean>;
}