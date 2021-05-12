import { Response, Request, NextFunction } from "express";
import ServerException from "../../../../exceptions/ServerException";
import ProjectNotFoundException from "../../exceptions/ProjectNotFoundException";
import { FetchProjectByIdUseCase } from "./fetchProjectByIdUseCase";

export class FetchProjectByIdController {
    constructor(private fetchProjectByIdUseCase: FetchProjectByIdUseCase){}

    async handle(request: Request, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const project = await this.fetchProjectByIdUseCase.execute(request.params.projectId);
            if (project) {
                return response.status(200).json(project);
            } else {
                next(new ProjectNotFoundException());
            }
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}