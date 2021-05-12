import { Router } from "express";
import { createUserController } from "./modules/user/useCases/createUser";
import { fetchUsersController } from "./modules/user/useCases/fetchUsers";
import { fetchUserByIdController } from "./modules/user/useCases/fetchUserById";
import { deleteUserController } from "./modules/user/useCases/deleteUser";
import { createProjectController } from "./modules/project/useCases/createProject";
import { fetchprojectsController } from "./modules/project/useCases/fetchProjects";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);  
});

router.get("/users", (request, response) => {
  return fetchUsersController.handle(request, response);
});

router.get("/users/:id", (request, response) => {
  return fetchUserByIdController.handle(request, response);
});

router.delete("/users/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});

router.post("/projects", (request, response) => {
  return createProjectController.handle(request, response);
});

router.get("/projects",  (request, response) => {
  return fetchprojectsController.handle(request, response);
});

export { router };