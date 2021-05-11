import { Router } from "express";
import { createUserController } from "./modules/user/useCases/createUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);  
});


export { router };