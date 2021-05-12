"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchProjectByIdUseCase_1 = require("./fetchProjectByIdUseCase");
var PostgresProjectRepository_1 = require("../../repositories/implementations/PostgresProjectRepository");
var fetchProjectByIdController_1 = require("./fetchProjectByIdController");
var postgresProjectRepository = new PostgresProjectRepository_1.PostgresProjectRepository();
var fetchProjectByIdUseCase = new fetchProjectByIdUseCase_1.FetchProjectByIdUseCase(postgresProjectRepository);
exports.fetchProjectByIdUseCase = fetchProjectByIdUseCase;
var fetchProjectByIdController = new fetchProjectByIdController_1.FetchProjectByIdController(fetchProjectByIdUseCase);
exports.fetchProjectByIdController = fetchProjectByIdController;
//# sourceMappingURL=index.js.map