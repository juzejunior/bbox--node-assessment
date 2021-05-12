import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDTO {
  @IsNotEmpty()
  @IsString()
  public userId: string;
  @IsNotEmpty()
  @IsString()
  public description: string;
}