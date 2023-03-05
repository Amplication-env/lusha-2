import { IUseCase } from "@infra/interfaces";
import { Pet } from "../model/dtos/Pet";
import { IPetRepository } from "../model/interfaces/repositories/pet-repository.interface";
import { CreatePetArgs } from "../model/dtos/CreatePetArgs";

export class CreatePetUseCase implements IUseCase<CreatePetArgs, Pet> {
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(args: CreatePetArgs): Promise<Pet> {
    return await this.petRepository.create(args);
  }
}
