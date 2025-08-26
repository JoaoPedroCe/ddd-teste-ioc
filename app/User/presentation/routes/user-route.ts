import { Request, Response, Router } from "express";
import { GetUsersController } from "../controller/get/get-users-controller";
import { container } from "../../ioc/user-container";

const route = Router();

// pega o controller com todas as dependências injetadas
const getUsersController = container.get(GetUsersController);

route.get("/users", (req: Request, res: Response) =>
  getUsersController.handle(req, res)
);

export default route;
