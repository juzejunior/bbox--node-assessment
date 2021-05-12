import { Response, Request } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}

    async handle(request: Request, response: Response) : Promise<Response> {
        try {
            const deletedUser = await this.deleteUserUseCase.execute(request.params.id);
            if (deletedUser) {
                return response.status(204).json();
            } else {
                return response.status(404).json({ message: "User not found!" });
            }
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Server error.'
            })
        }
    }
}