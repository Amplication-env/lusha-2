/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PetWhereInput } from "./PetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PetWhereInput,
  })
  @ValidateNested()
  @Type(() => PetWhereInput)
  @IsOptional()
  @Field(() => PetWhereInput, {
    nullable: true,
  })
  every?: PetWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetWhereInput,
  })
  @ValidateNested()
  @Type(() => PetWhereInput)
  @IsOptional()
  @Field(() => PetWhereInput, {
    nullable: true,
  })
  some?: PetWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetWhereInput,
  })
  @ValidateNested()
  @Type(() => PetWhereInput)
  @IsOptional()
  @Field(() => PetWhereInput, {
    nullable: true,
  })
  none?: PetWhereInput;
}
export { PetListRelationFilter as PetListRelationFilter };
