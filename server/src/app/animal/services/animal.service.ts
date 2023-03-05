import { Injectable } from "@nestjs/common";

import {
  FindManyAnimalUseCase,
  FindOneAnimalUseCase,
  CreateAnimalUseCase,
  UpdateAnimalUseCase,
  DeleteAnimalUseCase,
} from "../use-cases";

import { Animal } from "../model/dtos/animal";
import { AnimalFindManyArgs } from "../model/dtos/AnimalFindManyArgs";
import { AnimalFindUniqueArgs } from "../model/dtos/AnimalFindUniqueArgs";
import { CreateAnimalArgs } from "../model/dtos/CreateAnimalArgs";
import { UpdateAnimalArgs } from "../model/dtos/UpdateAnimalArgs";
import { DeleteAnimalArgs } from "../model/dtos/DeleteAnimalArgs";

@Injectable()
export class AnimalService {
  constructor(
    private findManyUseCase: FindManyAnimalUseCase,
    private findOneUseCase: FindOneAnimalUseCase,
    private createUseCase: CreateAnimalUseCase,
    private updateUseCase: UpdateAnimalUseCase,
    private deleteUseCase: DeleteAnimalUseCase
  ) {}

  async findMany(args: AnimalFindManyArgs): Promise<Animal[]> {
    return this.findManyUseCase.execute(args);
  }
  async findOne(args: AnimalFindUniqueArgs): Promise<Animal | null> {
    return this.findOneUseCase.execute(args);
  }
  async create(args: CreateAnimalArgs): Promise<Animal> {
    return this.createUseCase.execute(args);
  }
  async update(args: UpdateAnimalArgs): Promise<Animal> {
    return this.updateUseCase.execute(args);
  }
  async delete(args: DeleteAnimalArgs): Promise<Animal> {
    return this.deleteUseCase.execute(args);
  }
}
