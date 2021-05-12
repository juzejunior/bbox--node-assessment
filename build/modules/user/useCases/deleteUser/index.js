"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deleteUserUseCase_1 = require("./deleteUserUseCase");
var PostgresUserRepository_1 = require("../../repositories/implementations/PostgresUserRepository");
var deleteUserController_1 = require("./deleteUserController");
var postgresUserRepository = new PostgresUserRepository_1.PostgresUserRepository();
var deleteUserUseCase = new deleteUserUseCase_1.DeleteUserUseCase(postgresUserRepository);
exports.deleteUserUseCase = deleteUserUseCase;
var deleteUserController = new deleteUserController_1.DeleteUserController(deleteUserUseCase);
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=index.js.map