"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUserUseCase_1 = require("./createUserUseCase");
var PostgresUserRepository_1 = require("../../repositories/implementations/PostgresUserRepository");
var createUserController_1 = require("./createUserController");
var postgresUserRepository = new PostgresUserRepository_1.PostgresUserRepository();
var createUserUseCase = new createUserUseCase_1.CreateUserUseCase(postgresUserRepository);
exports.createUserUseCase = createUserUseCase;
var createUserController = new createUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map