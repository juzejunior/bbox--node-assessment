import { FetchUserByIdUseCase } from "./fetchUserByIdUseCase";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { FetchUserByIdController } from "./fetchUserByIdController";

const postgresUserRepository = new PostgresUserRepository();

const fetchUserByIdUseCase = new FetchUserByIdUseCase(postgresUserRepository);

const fetchUserByIdController = new FetchUserByIdController(fetchUserByIdUseCase);

export { FetchUserByIdUseCase, fetchUserByIdController };