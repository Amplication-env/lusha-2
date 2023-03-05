import { IUseCase } from "@infra/interfaces";
import { Pet } from "../model/dtos/Pet";
import { IPetRepository } from "../model/interfaces/repositories/pet-repository.interface";
import { UpdatePetArgs } from "../model/dtos/UpdatePetArgs";

export class UpdatePetUseCase implements IUseCase<UpdatePetArgs, Pet> {
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(args: UpdatePetArgs): Promise<Pet> {
    return await this.petRepository.update(args);
  }
}
