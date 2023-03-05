import { PrismaService } from "@app/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { IPetRepository } from "../model/interfaces/repositories/Pet-repository.interface";
import { Pet } from "../model/dtos/Pet";

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.PetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindManyArgs>
  ): Promise<Pet[]> {
    return await this.prisma.pet.findMany(args);
  }

  async findOne<T extends Prisma.PetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindUniqueArgs>
  ): Promise<Pet | null> {
    return await this.prisma.pet.findUnique(args as Prisma.PetFindUniqueArgs);
  }

  async create<T extends Prisma.PetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetCreateArgs>
  ): Promise<Pet> {
    return await this.prisma.pet.create<T>(args);
  }

  async update<T extends Prisma.PetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetUpdateArgs>
  ): Promise<Pet> {
    return await this.prisma.pet.update<T>(args);
  }

  async delete<T extends Prisma.PetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetDeleteArgs>
  ): Promise<Pet> {
    return await this.prisma.pet.delete(args);
  }
}
