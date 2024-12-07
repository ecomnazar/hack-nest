import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NameService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.name.findMany();
  }

  getNameById(id: number) {
    return this.prisma.name.findUnique({ where: { id } });
  }

  createName(data: Prisma.NameCreateInput) {
    return this.prisma.name.create({ data });
  }

  updateName(id: number, data: Prisma.NameUpdateInput) {
    const name = this.prisma.name.findUnique({ where: { id } });
    if (!name) throw new HttpException('Name by this ID not found', 404);
    return this.prisma.name.update({ where: { id }, data });
  }

  deleteNameById(id: number) {
    const name = this.prisma.name.findUnique({ where: { id } });
    if (!name) throw new HttpException('Name not found', 404);
  }
}
