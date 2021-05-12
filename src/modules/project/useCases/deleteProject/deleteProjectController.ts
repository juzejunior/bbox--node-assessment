import { Response, Request } from "express";
import { DeleteProjectUseCase } from "./deleteProjectUseCase";

export class DeleteProjectController {
    constructor(private deleteProjectUseCase: DeleteProjectUseCase) {}

    async handle(request: Request, response: Response) : Promise<Response> {
        try {
            const deletedProject = await this.deleteProjectUseCase.execute(request.params.projectId);
            if (deletedProject) {
                return response.status(204).json();
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