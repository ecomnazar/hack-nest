import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.location.findMany();
  }

  getById(id: number) {
    return this.prisma.location.findUnique({ where: { id } });
  }

  create(data: Prisma.LocationCreateInput) {
    return this.prisma.location.create({ data });
  }

  update(id: number, data: Prisma.LocationUpdateInput) {
    const location = this.prisma.location.findUnique({ where: { id } });
    if (!location)
      throw new HttpException('Location by this ID not found', 404);
    return this.prisma.location.update({ where: { id }, data });
  }

  delete(id: number) {
    const location = this.prisma.location.findUnique({ where: { id } });
    if (!location) throw new HttpException('Location not found', 404);
    return this.prisma.location.delete({ where: { id } });
  }
}
