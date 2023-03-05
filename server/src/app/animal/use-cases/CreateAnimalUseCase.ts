import { IUseCase } from "@infra/interfaces";
import { Animal } from "../model/dtos/Animal";
import { IAnimalRepository } from "../model/interfaces/repositories/animal-repository.interface";
import { CreateAnimalArgs } from "../model/dtos/CreateAnimalArgs";

export class CreateAnimalUseCase implements IUseCase<CreateAnimalArgs, Animal> {
  constructor(private readonly animalRepository: IAnimalRepository) {}

  async execute(args: CreateAnimalArgs): Promise<Animal> {
    return await this.animalRepository.create(args);
  }
}
