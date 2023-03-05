import { IUseCase } from "@infra/interfaces";
import { Pet } from "../model/dtos/Pet";
import { IPetRepository } from "../model/interfaces/repositories/pet-repository.interface";
import { DeletePetArgs } from "../model/dtos/DeletePetArgs";

export class DeletePetUseCase implements IUseCase<DeletePetArgs, Pet> {
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(args: DeletePetArgs): Promise<Pet> {
    return await this.petRepository.delete(args);
  }
}
