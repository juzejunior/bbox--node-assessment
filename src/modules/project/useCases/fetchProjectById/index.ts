import { FetchUserByIdUseCase } from "./fetchProjectByIdUseCase";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { FetchUserByIdController } from "./fetchProjectByIdController";

const postgresUserRepository = new PostgresUserRepository();

const fetchUserByIdUseCase = new FetchUserByIdUseCase(postgresUserRepository);

const fetchUserByIdController = new FetchUserByIdController(fetchUserByIdUseCase);

export { FetchUserByIdUseCase, fetchUserByIdController };