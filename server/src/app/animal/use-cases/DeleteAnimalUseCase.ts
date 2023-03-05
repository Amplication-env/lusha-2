import { IUseCase } from "@infra/interfaces";
import { Animal } from "../model/dtos/Animal";
import { IAnimalRepository } from "../model/interfaces/repositories/animal-repository.interface";
import { DeleteAnimalArgs } from "../model/dtos/DeleteAnimalArgs";

export class DeleteAnimalUseCase implements IUseCase<DeleteAnimalArgs, Animal> {
  constructor(private readonly animalRepository: IAnimalRepository) {}

  async execute(args: DeleteAnimalArgs): Promise<Animal> {
    return await this.animalRepository.delete(args);
  }
}
