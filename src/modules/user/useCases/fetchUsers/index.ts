import { FetchUsersUseCase } from "./fetchUsersUseCase";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { FetchUsersController } from "./fetchUsersController";

const postgresUserRepository = new PostgresUserRepository();

const fetchUsersUseCase = new FetchUsersUseCase(postgresUserRepository);

const fetchUsersController = new FetchUsersController(fetchUsersUseCase);

export { fetchUsersUseCase, fetchUsersController };