import { Response, Request } from "express";
import { FetchUsersUseCase } from "./fetchUsersUseCase";

export class FetchUsersController {
    constructor(private fetchUsersUseCase: FetchUsersUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        try {
            const users = await this.fetchUsersUseCase.execute();
            return response.status(200).json(users);
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Server error.'
            })
        }
    }
}