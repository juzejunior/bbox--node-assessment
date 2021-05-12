import { CreateProjectUseCase } from "./createProjectUseCase";
import { PostgresProjectRepository } from "../../repositories/implementations/PostgresProjectRepository";
import { CreateProjectController } from "./createProjectController";

const postgresProjectRepository = new PostgresProjectRepository();

const createProjectUseCase = new CreateProjectUseCase(postgresProjectRepository);

const createProjectController = new CreateProjectController(createProjectUseCase);

export { createProjectUseCase, createProjectController };