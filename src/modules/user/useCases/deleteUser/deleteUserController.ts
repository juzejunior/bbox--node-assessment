import { Response, Request, NextFunction } from "express";
import ServerException from "../../../../exceptions/ServerException";
import UserNotFoundException from "../../exceptions/UserNotFoundException";
import { DeleteUserUseCase } from "./deleteUserUseCase";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}

    async handle(request: Request, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const deletedUser = await this.deleteUserUseCase.execute(request.params.id);
            if (deletedUser) {
                return response.status(204).json();
            } else {
                next(new UserNotFoundException());
            }
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}