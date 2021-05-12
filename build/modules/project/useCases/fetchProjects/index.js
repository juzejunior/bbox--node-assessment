"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchProjectsUseCase_1 = require("./fetchProjectsUseCase");
var PostgresProjectRepository_1 = require("../../repositories/implementations/PostgresProjectRepository");
var fetchProjectsController_1 = require("./fetchProjectsController");
var postgresProjectsRepository = new PostgresProjectRepository_1.PostgresProjectRepository();
var fetchProjectsUseCase = new fetchProjectsUseCase_1.FetchProjectsUseCase(postgresProjectsRepository);
exports.fetchProjectsUseCase = fetchProjectsUseCase;
var fetchprojectsController = new fetchProjectsController_1.FetchProjectsController(fetchProjectsUseCase);
exports.fetchprojectsController = fetchprojectsController;
//# sourceMappingURL=index.js.map