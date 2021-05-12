import { Response, Request, NextFunction } from "express";
import ServerException from "../../../../exceptions/ServerException";
import UserNotFoundException from "../../exceptions/UserNotFoundException";
import { FetchUserByIdUseCase } from "./fetchUserByIdUseCase";

export class FetchUserByIdController {
    constructor(private fetchUserByIdUseCase: FetchUserByIdUseCase){}

    async handle(request: Request, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const user = await this.fetchUserByIdUseCase.execute(request.params.id);
            if (user) {
                return response.status(200).json(user);
            } else {
                next(new UserNotFoundException());
            }
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}