import { PrismaService } from "@app/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { IAnimalRepository } from "../model/interfaces/repositories/Animal-repository.interface";
import { Animal } from "../model/dtos/Animal";

@Injectable()
export class AnimalRepository implements IAnimalRepository {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.AnimalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnimalFindManyArgs>
  ): Promise<Animal[]> {
    return await this.prisma.animal.findMany(args);
  }

  async findOne<T extends Prisma.AnimalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnimalFindUniqueArgs>
  ): Promise<Animal | null> {
    return await this.prisma.animal.findUnique(
      args as Prisma.AnimalFindUniqueArgs
    );
  }

  async create<T extends Prisma.AnimalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnimalCreateArgs>
  ): Promise<Animal> {
    return await this.prisma.animal.create<T>(args);
  }

  async update<T extends Prisma.AnimalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnimalUpdateArgs>
  ): Promise<Animal> {
    return await this.prisma.animal.update<T>(args);
  }

  async delete<T extends Prisma.AnimalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnimalDeleteArgs>
  ): Promise<Animal> {
    return await this.prisma.animal.delete(args);
  }
}
