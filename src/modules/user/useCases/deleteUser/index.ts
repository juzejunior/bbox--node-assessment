import { DeleteUserUseCase } from "./deleteUserUseCase";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { DeleteUserController } from "./deleteUserController";

const postgresUserRepository = new PostgresUserRepository();

const deleteUserUseCase = new DeleteUserUseCase(postgresUserRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };