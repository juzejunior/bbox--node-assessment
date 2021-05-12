import { Response, Request } from "express";
import { FetchProjectsUseCase } from "./fetchProjectsUseCase";

export class FetchProjectsController {
    constructor(private fetchProjectsUseCase: FetchProjectsUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        try {
            const { userId } = request.query;
            let projects = [];
            if (userId) {
                projects = await this.fetchProjectsUseCase.execute(userId.toString());
            } else {
                projects = await this.fetchProjectsUseCase.execute();
            }
            return response.status(200).json(projects);
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Server error.'
            })
        }
    }
}