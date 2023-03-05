import * as common from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { isRecordNotFoundError } from "../prisma.util";
import * as errors from "../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import * as nestAccessControl from "nest-access-control";
import { PetService } from "../app/pet/services/pet.service";
import { PetCreateInput } from "../app/pet/model/dtos/PetCreateInput";
import { PetWhereUniqueInput } from "../app/pet/model/dtos/PetWhereUniqueInput";
import { PetFindManyArgs } from "../app/pet/model/dtos/petFindManyArgs";
import { PetUpdateInput } from "../app/pet/model/dtos/PetUpdateInput";
import { Pet } from "../app/pet/model/dtos/Pet";

@ApiTags("wished-contacts-v2")
@common.Controller("Pet")
export class PetController {
  constructor(
    protected readonly service: PetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.Post()
  async create(@common.Body() data: PetCreateInput): Promise<Pet> {
    return await this.service.create({
      data: data,
    });
  }

  @common.Get()
  async findMany(@common.Req() request: Request): Promise<Pet[]> {
    const args = plainToClass(PetFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
    });
  }

  @common.Get("/:id")
  async findOne(
    @common.Param() params: PetWhereUniqueInput
  ): Promise<Pet | null> {
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
    @common.Param() params: PetWhereUniqueInput,
    @common.Body() data: PetUpdateInput
  ): Promise<Pet | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
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
    @common.Param() params: PetWhereUniqueInput
  ): Promise<Pet | null> {
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
