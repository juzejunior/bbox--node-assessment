import { FetchProjectByIdUseCase } from "./fetchProjectByIdUseCase";
import { PostgresProjectRepository } from "../../repositories/implementations/PostgresProjectRepository";
import { FetchProjectByIdController } from "./fetchProjectByIdController";

const postgresProjectRepository = new PostgresProjectRepository();

const fetchProjectByIdUseCase = new FetchProjectByIdUseCase(postgresProjectRepository);

const fetchProjectByIdController = new FetchProjectByIdController(fetchProjectByIdUseCase);

export { fetchProjectByIdUseCase, fetchProjectByIdController };