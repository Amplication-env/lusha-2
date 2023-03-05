import { IUseCase } from "@infra/interfaces";
import { Animal } from "../model/dtos/Animal";
import { IAnimalRepository } from "../model/interfaces/repositories/animal-repository.interface";
import { UpdateAnimalArgs } from "../model/dtos/UpdateAnimalArgs";

export class UpdateAnimalUseCase implements IUseCase<UpdateAnimalArgs, Animal> {
  constructor(private readonly animalRepository: IAnimalRepository) {}

  async execute(args: UpdateAnimalArgs): Promise<Animal> {
    return await this.animalRepository.update(args);
  }
}
