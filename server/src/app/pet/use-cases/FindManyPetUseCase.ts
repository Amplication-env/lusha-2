import { IUseCase } from "@infra/interfaces";
import { Pet } from "../model/dtos/Pet";
import { IPetRepository } from "../model/interfaces/repositories/pet-repository.interface";
import { PetFindManyArgs } from "../model/dtos/PetFindManyArgs";

export class FindManyPetUseCase implements IUseCase<PetFindManyArgs, Pet> {
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(args: PetFindManyArgs): Promise<Pet[]> {
    return await this.petRepository.findMany(args);
  }
}
