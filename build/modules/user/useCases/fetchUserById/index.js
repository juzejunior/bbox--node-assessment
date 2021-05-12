"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchUserByIdUseCase_1 = require("./fetchUserByIdUseCase");
exports.FetchUserByIdUseCase = fetchUserByIdUseCase_1.FetchUserByIdUseCase;
var PostgresUserRepository_1 = require("../../repositories/implementations/PostgresUserRepository");
var fetchUserByIdController_1 = require("./fetchUserByIdController");
var postgresUserRepository = new PostgresUserRepository_1.PostgresUserRepository();
var fetchUserByIdUseCase = new fetchUserByIdUseCase_1.FetchUserByIdUseCase(postgresUserRepository);
var fetchUserByIdController = new fetchUserByIdController_1.FetchUserByIdController(fetchUserByIdUseCase);
exports.fetchUserByIdController = fetchUserByIdController;
//# sourceMappingURL=index.js.map