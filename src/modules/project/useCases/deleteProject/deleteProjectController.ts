import { Response, Request, NextFunction } from "express";
import ServerException from "../../../../exceptions/ServerException";
import ProjectNotFoundException from "../../exceptions/ProjectNotFoundException";
import { DeleteProjectUseCase } from "./deleteProjectUseCase";

export class DeleteProjectController {
    constructor(private deleteProjectUseCase: DeleteProjectUseCase) {}

    async handle(request: Request, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const deletedProject = await this.deleteProjectUseCase.execute(request.params.projectId);
            if (deletedProject) {
                return response.status(204).json();
            } else {
                next(new ProjectNotFoundException());
            }
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}