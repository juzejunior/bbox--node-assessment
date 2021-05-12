import { Response, Request, NextFunction } from "express";
import ServerException from "../../../../exceptions/ServerException";
import { FetchUsersUseCase } from "./fetchUsersUseCase";

export class FetchUsersController {
    constructor(private fetchUsersUseCase: FetchUsersUseCase){}

    async handle(request: Request, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const users = await this.fetchUsersUseCase.execute();
            return response.status(200).json(users);
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}