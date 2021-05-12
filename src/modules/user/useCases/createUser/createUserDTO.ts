import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    public firstName: string;
    @IsString()
    public lastName: string;
    @IsNotEmpty()
    @IsEmail()
    public email: string;
    @IsString()
    public phoneNumber: string;
    @IsNotEmpty()
    @IsString()
    public password: string;
}