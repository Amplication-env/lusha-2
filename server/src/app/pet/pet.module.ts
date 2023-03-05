import { Module } from "@nestjs/common";
import { PetController } from "../../web-server/pet.controller";
import { PetRepository } from "./repositories/pet.repository";

import {
  FindManyPetUseCase,
  FindOnePetUseCase,
  CreatePetUseCase,
  UpdatePetUseCase,
  DeletePetUseCase,
} from "./use-cases";

import { PetService } from "./services";
import { IPetRepository } from "./model/interfaces/repositories/pet-repository.interface";

@Module({
  controllers: [PetController],
  providers: [
    PetRepository,
    PetService,
    {
      provide: CreatePetUseCase,
      useFactory: (repository: IPetRepository) =>
        new CreatePetUseCase(repository),
      inject: [PetRepository],
    },
    {
      provide: DeletePetUseCase,
      useFactory: (repository: IPetRepository) =>
        new DeletePetUseCase(repository),
      inject: [PetRepository],
    },
    {
      provide: FindOnePetUseCase,
      useFactory: (repository: IPetRepository) =>
        new FindOnePetUseCase(repository),
      inject: [PetRepository],
    },
    {
      provide: UpdatePetUseCase,
      useFactory: (repository: IPetRepository) =>
        new UpdatePetUseCase(repository),
      inject: [PetRepository],
    },
    {
      provide: FindManyPetUseCase,
      useFactory: (repository: IPetRepository) =>
        new FindManyPetUseCase(repository),
      inject: [PetRepository],
    },
  ],
})
export class LushaPetModule {}
