"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeController = void 0;
const common_1 = require("@nestjs/common");
const tree_service_1 = require("./tree.service");
const swagger_1 = require("@nestjs/swagger");
const CreateTree_dto_1 = require("./dto/CreateTree.dto");
let TreeController = class TreeController {
    constructor(treeService) {
        this.treeService = treeService;
    }
    getAll() {
        return this.treeService.getAll();
    }
    getById(id) {
        return this.treeService.getById(id);
    }
    create(createTreeDto) {
        const data = {
            ...createTreeDto,
            location: { connect: { id: createTreeDto.locationId } },
            name: { connect: { id: createTreeDto.nameId } },
        };
        delete data.locationId;
        delete data.nameId;
        return this.treeService.create(data);
    }
    getByLocationId(locationId) {
        return this.treeService.getTreesByLocationId(locationId);
    }
    getImageUrl(id, body) {
        return this.treeService.addImageUrlByTreeId(id, body.imgUrl);
    }
    delete(id) {
        return this.treeService.delete(id);
    }
    killTree(id) {
        return this.treeService.kill(id);
    }
    isPositionAvailable(locationId, row, column) {
        return this.treeService.isPositionAvailable(locationId, row, column);
    }
};
exports.TreeController = TreeController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all trees' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tree by id' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create tree' }),
    (0, swagger_1.ApiBody)({
        type: CreateTree_dto_1.CreateTreeDto,
        examples: {
            example1: {
                value: {
                    locationId: 0,
                    nameId: 0,
                    row: 0,
                    column: 0,
                    imgUrl: '',
                    species: 'Тип дерева',
                    age: 0,
                    lastWatered: 'Дата последнего полива',
                    wateringFreq: 'Частота полива (например, раз в 7 дней): number',
                    pestResistance: 'Устойчивость к вредителям: true/false',
                    diseaseResistance: 'Устойчивость к болезням: true/false',
                    sunlight: 'Свет: number',
                    temperature: 'Температура: number',
                    humidity: 'Влажность: number',
                    lastHarvest: 'Дата последнего урожая',
                    harvestQty: 'Количество урожая: number',
                    lastTreated: 'Дата последней обработки',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTree_dto_1.CreateTreeDto]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('location/:locationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all trees by location id' }),
    __param(0, (0, common_1.Param)('locationId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "getByLocationId", null);
__decorate([
    (0, common_1.Put)('image/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload image by tree id' }),
    (0, swagger_1.ApiBody)({
        type: CreateTree_dto_1.CreateTreeDto,
        examples: {
            example1: {
                value: {
                    imgUrl: 'https://example.com/image.jpg',
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "getImageUrl", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete tree' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('kill/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Kill tree' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "killTree", null);
__decorate([
    (0, common_1.Get)('position/:locationId/:row/:column'),
    (0, swagger_1.ApiOperation)({ summary: 'Check is creating tree position available' }),
    __param(0, (0, common_1.Param)('locationId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('row', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('column', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], TreeController.prototype, "isPositionAvailable", null);
exports.TreeController = TreeController = __decorate([
    (0, common_1.Controller)('tree'),
    __metadata("design:paramtypes", [tree_service_1.TreeService])
], TreeController);
//# sourceMappingURL=tree.controller.js.map