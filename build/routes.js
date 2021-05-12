"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validation_middleware_1 = __importDefault(require("./middleware/validation.middleware"));
var createUser_1 = require("./modules/user/useCases/createUser");
var fetchUsers_1 = require("./modules/user/useCases/fetchUsers");
var fetchUserById_1 = require("./modules/user/useCases/fetchUserById");
var deleteUser_1 = require("./modules/user/useCases/deleteUser");
var createProject_1 = require("./modules/project/useCases/createProject");
var fetchProjects_1 = require("./modules/project/useCases/fetchProjects");
var fetchProjectById_1 = require("./modules/project/useCases/fetchProjectById");
var deleteProject_1 = require("./modules/project/useCases/deleteProject");
var createUserDTO_1 = require("./modules/user/useCases/createUser/createUserDTO");
var router = express_1.Router();
exports.router = router;
router.post("/users", validation_middleware_1.default(createUserDTO_1.CreateUserDTO), createUser_1.createUserController.handle);
router.get("/users", function (request, response, next) {
    return fetchUsers_1.fetchUsersController.handle(request, response, next);
});
router.get("/users/:id", function (request, response, next) {
    return fetchUserById_1.fetchUserByIdController.handle(request, response, next);
});
router.delete("/users/:id", function (request, response, next) {
    return deleteUser_1.deleteUserController.handle(request, response, next);
});
router.post("/projects", function (request, response, next) {
    return createProject_1.createProjectController.handle(request, response, next);
});
router.get("/projects", function (request, response, next) {
    return fetchProjects_1.fetchprojectsController.handle(request, response, next);
});
router.get("/projects/:projectId", function (request, response, next) {
    return fetchProjectById_1.fetchProjectByIdController.handle(request, response, next);
});
router.delete("/projects/:projectId", function (request, response, next) {
    return deleteProject_1.deleteProjectController.handle(request, response, next);
});
//# sourceMappingURL=routes.js.map