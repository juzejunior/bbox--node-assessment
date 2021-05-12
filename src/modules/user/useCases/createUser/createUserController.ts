import { NextFunction, Response } from "express";
import { CustomRequest } from "../../../../common/RequestType";
import ServerException from "../../../../exceptions/ServerException";
import { CreateUserDTO } from "./createUserDTO";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    constructor(private createUserCase: CreateUserUseCase){}

    async handle({ body }: CustomRequest<CreateUserDTO>, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const user = await this.createUserCase.execute(body);
            return response.status(201).json({ id: user.uuid });
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}