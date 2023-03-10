/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AnimalWhereUniqueInput } from "../../animal/base/AnimalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AnimalUpdateManyWithoutPetsInput {
  @Field(() => [AnimalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnimalWhereUniqueInput],
  })
  connect?: Array<AnimalWhereUniqueInput>;

  @Field(() => [AnimalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnimalWhereUniqueInput],
  })
  disconnect?: Array<AnimalWhereUniqueInput>;

  @Field(() => [AnimalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnimalWhereUniqueInput],
  })
  set?: Array<AnimalWhereUniqueInput>;
}

export { AnimalUpdateManyWithoutPetsInput as AnimalUpdateManyWithoutPetsInput };
