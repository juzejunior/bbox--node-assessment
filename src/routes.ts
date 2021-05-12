import { Router } from "express";
import { createUserController } from "./modules/user/useCases/createUser";
import { fetchUsersController } from "./modules/user/useCases/fetchUsers";
import { fetchUserByIdController } from "./modules/user/useCases/fetchUserById";


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

export { router };