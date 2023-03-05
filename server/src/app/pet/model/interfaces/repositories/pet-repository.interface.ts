import { Prisma } from "@prisma/client";
import { Pet } from "../../dtos/Pet";

export interface IPetRepository {
  findMany: (args: Prisma.petFindManyArgs) => Promise<Pet[]>;
  findOne: (args: Prisma.petFindUniqueArgs) => Promise<Pet>;
  create: (args: Prisma.petCreateArgs) => Promise<Pet>;
  update: (args: Prisma.petUpdateArgs) => Promise<Pet>;
  delete: (args: Prisma.petDeleteArgs) => Promise<Pet>;
}
