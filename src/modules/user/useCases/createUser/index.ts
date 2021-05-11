import { CreateUserUseCase } from "./createUserUseCase";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./createUserController";

const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(postgresUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };