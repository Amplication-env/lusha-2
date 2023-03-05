import { Injectable } from "@nestjs/common";

import {
  FindManyPetUseCase,
  FindOnePetUseCase,
  CreatePetUseCase,
  UpdatePetUseCase,
  DeletePetUseCase,
} from "../use-cases";

import { Pet } from "../model/dtos/pet";
import { PetFindManyArgs } from "../model/dtos/PetFindManyArgs";
import { PetFindUniqueArgs } from "../model/dtos/PetFindUniqueArgs";
import { CreatePetArgs } from "../model/dtos/CreatePetArgs";
import { UpdatePetArgs } from "../model/dtos/UpdatePetArgs";
import { DeletePetArgs } from "../model/dtos/DeletePetArgs";

@Injectable()
export class PetService {
  constructor(
    private findManyUseCase: FindManyPetUseCase,
    private findOneUseCase: FindOnePetUseCase,
    private createUseCase: CreatePetUseCase,
    private updateUseCase: UpdatePetUseCase,
    private deleteUseCase: DeletePetUseCase
  ) {}

  async findMany(args: PetFindManyArgs): Promise<Pet[]> {
    return this.findManyUseCase.execute(args);
  }
  async findOne(args: PetFindUniqueArgs): Promise<Pet | null> {
    return this.findOneUseCase.execute(args);
  }
  async create(args: CreatePetArgs): Promise<Pet> {
    return this.createUseCase.execute(args);
  }
  async update(args: UpdatePetArgs): Promise<Pet> {
    return this.updateUseCase.execute(args);
  }
  async delete(args: DeletePetArgs): Promise<Pet> {
    return this.deleteUseCase.execute(args);
  }
}
