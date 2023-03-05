import { Prisma } from "@prisma/client";
import { Animal } from "../../dtos/Animal";

export interface IAnimalRepository {
  findMany: (args: Prisma.animalFindManyArgs) => Promise<Animal[]>;
  findOne: (args: Prisma.animalFindUniqueArgs) => Promise<Animal>;
  create: (args: Prisma.animalCreateArgs) => Promise<Animal>;
  update: (args: Prisma.animalUpdateArgs) => Promise<Animal>;
  delete: (args: Prisma.animalDeleteArgs) => Promise<Animal>;
}
