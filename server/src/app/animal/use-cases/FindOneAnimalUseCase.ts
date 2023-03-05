import { IUseCase } from "@infra/interfaces";
import { Animal } from "../model/dtos/Animal";
import { IAnimalRepository } from "../model/interfaces/repositories/animal-repository.interface";
import { AnimalFindOneArgs } from "../model/dtos/AnimalFindOneArgs";

export class FindOneAnimalUseCase
  implements IUseCase<AnimalFindOneArgs, Animal>
{
  constructor(private readonly animalRepository: IAnimalRepository) {}

  async execute(args: AnimalFindOneArgs): Promise<Animal | null> {
    return await this.animalRepository.findOne(args);
  }
}
