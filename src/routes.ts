import { Router } from "express";
import validationMiddleware from "./middleware/validation.middleware";
import { createUserController } from "./modules/user/useCases/createUser";
import { fetchUsersController } from "./modules/user/useCases/fetchUsers";
import { fetchUserByIdController } from "./modules/user/useCases/fetchUserById";
import { deleteUserController } from "./modules/user/useCases/deleteUser";
import { createProjectController } from "./modules/project/useCases/createProject";
import { fetchprojectsController } from "./modules/project/useCases/fetchProjects";
import { fetchProjectByIdController } from "./modules/project/useCases/fetchProjectById";
import { deleteProjectController } from "./modules/project/useCases/deleteProject";
import { CreateUserDTO } from "./modules/user/useCases/createUser/createUserDTO";
import { CreateProjectDTO } from "./modules/project/useCases/createProject/createProjectDTO";

const router = Router();

router.post("/users", validationMiddleware(CreateUserDTO), (request, response, next) => {
  return createUserController.handle(request, response, next);
});

router.get("/users", (request, response, next) => {
  return fetchUsersController.handle(request, response, next);
});

router.get("/users/:id", (request, response, next) => {
  return fetchUserByIdController.handle(request, response, next);
});

router.delete("/users/:id", (request, response, next) => {
  return deleteUserController.handle(request, response, next);
});

router.post("/projects", validationMiddleware(CreateProjectDTO), (request, response, next) => {
  return createProjectController.handle(request, response, next);
});

router.get("/projects",  (request, response, next) => {
  return fetchprojectsController.handle(request, response, next);
});

router.get("/projects/:projectId", (request, response, next) => {
  return fetchProjectByIdController.handle(request, response, next);
});

router.delete("/projects/:projectId", (request, response, next) => {
 return deleteProjectController.handle(request, response, next);
});

export { router };