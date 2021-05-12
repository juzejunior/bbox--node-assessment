import { NextFunction, Response } from "express";
import { CustomRequest } from "../../../../common/RequestType";
import HttpException from "../../../../exceptions/HttpException";
import ServerException from "../../../../exceptions/ServerException";
import { CreateProjectDTO } from "./createProjectDTO";
import { CreateProjectUseCase } from "./createProjectUseCase";

export class CreateProjectController {
    constructor(private createProjectUseCase: CreateProjectUseCase){}

    async handle({ body }: CustomRequest<CreateProjectDTO>, response: Response, next: NextFunction) : Promise<Response> {
        try {
            const project = await this.createProjectUseCase.execute(body);
            return response.status(201).json({ id: project.uuid });
        } catch(err) {
            next(new ServerException(err.message));
        }
    }
}