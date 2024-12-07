import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TreeService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.tree.findMany();
  }

  getById(id: number) {
    return this.prisma.tree.findUnique({ where: { id } });
  }

  create(data: Prisma.TreeCreateInput) {
    return this.prisma.tree.create({ data });
  }

  update(id: number, data: Prisma.TreeUpdateInput) {
    const tree = this.prisma.tree.findUnique({ where: { id } });
    if (!tree) throw new HttpException('Tree by this ID not found', 404);
    return this.prisma.tree.update({ where: { id }, data });
  }

  kill(id: number) {
    const tree = this.prisma.tree.findUnique({ where: { id } });
    if (!tree) throw new HttpException('Tree by this ID not found', 404);
    return this.prisma.tree.update({
      where: { id },
      data: { status: 'DELETED' },
    });
  }

  delete(id: number) {
    const tree = this.prisma.tree.findUnique({ where: { id } });
    if (!tree) throw new HttpException('Tree not found', 404);
    return this.prisma.tree.delete({ where: { id } });
  }

  getTreesByLocationId(locationId: number) {
    return this.prisma.tree.findMany({ where: { locationId } });
  }

  addImageUrlByTreeId(id: number, imgUrl: string) {
    const tree = this.prisma.tree.findUnique({ where: { id } });
    if (!tree) throw new HttpException('Tree by this ID not found', 404);
    return this.prisma.tree.update({ where: { id }, data: { imgUrl } });
  }

  async isPositionAvailable(locationId: number, row: number, column: number) {
    const isAvailable = await this.prisma.tree.findFirst({
      where: { locationId, row, column },
    });
    return !isAvailable;
  }
}
