import { Response, Request } from "express";
import { FetchProjectByIdUseCase } from "./fetchProjectByIdUseCase";

export class FetchProjectByIdController {
    constructor(private fetchProjectByIdUseCase: FetchProjectByIdUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        try {
            const project = await this.fetchProjectByIdUseCase.execute(request.params.projectId);
            if (project) {
                return response.status(200).json(project);
            } else {
                return response.status(404).json({ message: "Project not found!" });
            }
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Server error.'
            })
        }
    }
}