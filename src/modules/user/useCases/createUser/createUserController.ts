import { Response } from "express";
import { CustomRequest } from "../../../../common/RequestType";
import { CreateUserDTO } from "./createUserDTO";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    constructor(private createUserCase: CreateUserUseCase){}

    async handle({ body }: CustomRequest<CreateUserDTO>, response: Response) : Promise<Response> {
        try {
            const user = await this.createUserCase.execute(body);
            return response.status(201).json({ id: user.uuid });
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Server error.'
            })
        }
    }
}