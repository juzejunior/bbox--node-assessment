import { Response } from "express";
import { CustomRequest } from "../../../../common/RequestType";
import { CreateProjectDTO } from "./createProjectDTO";
import { CreateProjectUseCase } from "./createProjectUseCase";

export class CreateProjectController {
    constructor(private createProjectUseCase: CreateProjectUseCase){}

    async handle({ body }: CustomRequest<CreateProjectDTO>, response: Response) : Promise<Response> {
        try {
            const project = await this.createProjectUseCase.execute(body);
            return response.status(201).json({ id: project.uuid });
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Server error.'
            })
        }
    }
}