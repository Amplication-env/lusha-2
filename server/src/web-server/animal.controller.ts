import * as common from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { isRecordNotFoundError } from "../prisma.util";
import * as errors from "../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import * as nestAccessControl from "nest-access-control";
import { AnimalService } from "../app/animal/services/animal.service";
import { AnimalCreateInput } from "../app/animal/model/dtos/AnimalCreateInput";
import { AnimalWhereUniqueInput } from "../app/animal/model/dtos/AnimalWhereUniqueInput";
import { AnimalFindManyArgs } from "../app/animal/model/dtos/animalFindManyArgs";
import { AnimalUpdateInput } from "../app/animal/model/dtos/AnimalUpdateInput";
import { Animal } from "../app/animal/model/dtos/Animal";

@ApiTags("wished-contacts-v2")
@common.Controller("Animal")
export class AnimalController {
  constructor(
    protected readonly service: AnimalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.Post()
  async create(@common.Body() data: AnimalCreateInput): Promise<Animal> {
    return await this.service.create({
      data: {
        ...data,

        pet: data.pet
          ? {
              connect: data.pet,
            }
          : undefined,
      },
    });
  }

  @common.Get()
  async findMany(@common.Req() request: Request): Promise<Animal[]> {
    const args = plainToClass(AnimalFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
    });
  }

  @common.Get("/:id")
  async findOne(
    @common.Param() params: AnimalWhereUniqueInput
  ): Promise<Animal | null> {
    const result = await this.service.findOne({
      where: params,
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  async update(
    @common.Param() params: AnimalWhereUniqueInput,
    @common.Body() data: AnimalUpdateInput
  ): Promise<Animal | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          pet: data.pet
            ? {
                connect: data.pet,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  async delete(
    @common.Param() params: AnimalWhereUniqueInput
  ): Promise<Animal | null> {
    try {
      return await this.service.delete({
        where: params,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
