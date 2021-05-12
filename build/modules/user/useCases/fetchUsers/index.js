"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchUsersUseCase_1 = require("./fetchUsersUseCase");
var PostgresUserRepository_1 = require("../../repositories/implementations/PostgresUserRepository");
var fetchUsersController_1 = require("./fetchUsersController");
var postgresUserRepository = new PostgresUserRepository_1.PostgresUserRepository();
var fetchUsersUseCase = new fetchUsersUseCase_1.FetchUsersUseCase(postgresUserRepository);
exports.fetchUsersUseCase = fetchUsersUseCase;
var fetchUsersController = new fetchUsersController_1.FetchUsersController(fetchUsersUseCase);
exports.fetchUsersController = fetchUsersController;
//# sourceMappingURL=index.js.map