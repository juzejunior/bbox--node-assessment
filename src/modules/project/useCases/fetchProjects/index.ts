import { FetchProjectsUseCase } from "./fetchProjectsUseCase";
import { PostgresProjectRepository } from "../../repositories/implementations/PostgresProjectRepository";
import { FetchProjectsController } from "./fetchProjectsController";

const postgresProjectsRepository = new PostgresProjectRepository();

const fetchProjectsUseCase = new FetchProjectsUseCase(postgresProjectsRepository);

const fetchprojectsController = new FetchProjectsController(fetchProjectsUseCase);

export { fetchProjectsUseCase, fetchprojectsController };