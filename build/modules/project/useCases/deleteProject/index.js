"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deleteProjectUseCase_1 = require("./deleteProjectUseCase");
var PostgresProjectRepository_1 = require("../../repositories/implementations/PostgresProjectRepository");
var deleteProjectController_1 = require("./deleteProjectController");
var postgresProjectRepository = new PostgresProjectRepository_1.PostgresProjectRepository();
var deleteProjectUseCase = new deleteProjectUseCase_1.DeleteProjectUseCase(postgresProjectRepository);
exports.deleteProjectUseCase = deleteProjectUseCase;
var deleteProjectController = new deleteProjectController_1.DeleteProjectController(deleteProjectUseCase);
exports.deleteProjectController = deleteProjectController;
//# sourceMappingURL=index.js.map