import { IUseCase } from "@infra/interfaces";
import { Animal } from "../model/dtos/Animal";
import { IAnimalRepository } from "../model/interfaces/repositories/animal-repository.interface";
import { AnimalFindManyArgs } from "../model/dtos/AnimalFindManyArgs";

export class FindManyAnimalUseCase
  implements IUseCase<AnimalFindManyArgs, Animal>
{
  constructor(private readonly animalRepository: IAnimalRepository) {}

  async execute(args: AnimalFindManyArgs): Promise<Animal[]> {
    return await this.animalRepository.findMany(args);
  }
}
