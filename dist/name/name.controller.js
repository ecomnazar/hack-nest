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
exports.NameController = void 0;
const common_1 = require("@nestjs/common");
const name_service_1 = require("./name.service");
const CreateName_dto_1 = require("./dto/CreateName.dto");
const swagger_1 = require("@nestjs/swagger");
let NameController = class NameController {
    constructor(nameService) {
        this.nameService = nameService;
    }
    getAll() {
        return this.nameService.getAll();
    }
    getById(id) {
        return this.nameService.getNameById(id);
    }
    createName(createNameDto) {
        return this.nameService.createName(createNameDto);
    }
    updateName(id, createNameDto) {
        return this.nameService.updateName(id, createNameDto);
    }
    delete(id) {
        return this.nameService.deleteNameById(id);
    }
};
exports.NameController = NameController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all names' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NameController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get name by id' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create name' }),
    (0, swagger_1.ApiBody)({
        type: CreateName_dto_1.CreateNameDto,
        examples: {
            example1: {
                value: {
                    name: 'Name',
                    description: 'Description',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateName_dto_1.CreateNameDto]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "createName", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update name' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CreateName_dto_1.CreateNameDto]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "updateName", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete name' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "delete", null);
exports.NameController = NameController = __decorate([
    (0, swagger_1.ApiTags)('Name'),
    (0, common_1.Controller)('name'),
    __metadata("design:paramtypes", [name_service_1.NameService])
], NameController);
//# sourceMappingURL=name.controller.js.map