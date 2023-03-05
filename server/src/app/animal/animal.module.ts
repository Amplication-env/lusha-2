import { Module } from "@nestjs/common";
import { AnimalController } from "../../web-server/animal.controller";
import { AnimalRepository } from "./repositories/animal.repository";

import {
  FindManyAnimalUseCase,
  FindOneAnimalUseCase,
  CreateAnimalUseCase,
  UpdateAnimalUseCase,
  DeleteAnimalUseCase,
} from "./use-cases";

import { AnimalService } from "./services";
import { IAnimalRepository } from "./model/interfaces/repositories/animal-repository.interface";

@Module({
  controllers: [AnimalController],
  providers: [
    AnimalRepository,
    AnimalService,
    {
      provide: CreateAnimalUseCase,
      useFactory: (repository: IAnimalRepository) =>
        new CreateAnimalUseCase(repository),
      inject: [AnimalRepository],
    },
    {
      provide: DeleteAnimalUseCase,
      useFactory: (repository: IAnimalRepository) =>
        new DeleteAnimalUseCase(repository),
      inject: [AnimalRepository],
    },
    {
      provide: FindOneAnimalUseCase,
      useFactory: (repository: IAnimalRepository) =>
        new FindOneAnimalUseCase(repository),
      inject: [AnimalRepository],
    },
    {
      provide: UpdateAnimalUseCase,
      useFactory: (repository: IAnimalRepository) =>
        new UpdateAnimalUseCase(repository),
      inject: [AnimalRepository],
    },
    {
      provide: FindManyAnimalUseCase,
      useFactory: (repository: IAnimalRepository) =>
        new FindManyAnimalUseCase(repository),
      inject: [AnimalRepository],
    },
  ],
})
export class LushaAnimalModule {}
