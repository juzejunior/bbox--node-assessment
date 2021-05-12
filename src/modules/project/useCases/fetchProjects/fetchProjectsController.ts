import { Response, Request, NextFunction } from "express";
import HttpException from "../../../../exceptions/HttpException";
import ServerException from "../../../../exceptions/ServerException";
import { FetchProjectsUseCase } from "./fetchProjectsUseCase";

export class FetchProjectsController {
    constructor(private fetchProjectsUseCase: FetchProjectsUseCase){}

    async handle(request: Request, response: Response, next: NextFunction) : Promise<Response> {
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
            next(new ServerException(err.message));
        }
    }
}