import { IUseCase } from "@infra/interfaces";
import { Pet } from "../model/dtos/Pet";
import { IPetRepository } from "../model/interfaces/repositories/pet-repository.interface";
import { PetFindOneArgs } from "../model/dtos/PetFindOneArgs";

export class FindOnePetUseCase implements IUseCase<PetFindOneArgs, Pet> {
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(args: PetFindOneArgs): Promise<Pet | null> {
    return await this.petRepository.findOne(args);
  }
}
