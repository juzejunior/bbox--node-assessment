import { DeleteProjectUseCase } from "./deleteProjectUseCase";
import { PostgresProjectRepository } from "../../repositories/implementations/PostgresProjectRepository";
import { DeleteProjectController } from "./deleteProjectController";

const postgresProjectRepository = new PostgresProjectRepository();

const deleteProjectUseCase = new DeleteProjectUseCase(postgresProjectRepository);

const deleteProjectController = new DeleteProjectController(deleteProjectUseCase);

export { deleteProjectUseCase, deleteProjectController };