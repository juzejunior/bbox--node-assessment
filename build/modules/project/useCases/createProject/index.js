"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createProjectUseCase_1 = require("./createProjectUseCase");
var PostgresProjectRepository_1 = require("../../repositories/implementations/PostgresProjectRepository");
var createProjectController_1 = require("./createProjectController");
var postgresProjectRepository = new PostgresProjectRepository_1.PostgresProjectRepository();
var createProjectUseCase = new createProjectUseCase_1.CreateProjectUseCase(postgresProjectRepository);
exports.createProjectUseCase = createProjectUseCase;
var createProjectController = new createProjectController_1.CreateProjectController(createProjectUseCase);
exports.createProjectController = createProjectController;
//# sourceMappingURL=index.js.map