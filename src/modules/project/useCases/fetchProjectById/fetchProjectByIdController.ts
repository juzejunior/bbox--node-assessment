import { Response, Request } from "express";
import { FetchUserByIdUseCase } from "./fetchProjectByIdUseCase";

export class FetchUserByIdController {
    constructor(private fetchUserByIdUseCase: FetchUserByIdUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        try {
            const user = await this.fetchUserByIdUseCase.execute(request.params.id);
            if (user) {
                return response.status(200).json(user);
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