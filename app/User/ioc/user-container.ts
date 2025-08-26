import { Container } from "inversify";
import { IUserRepository } from "../domain/repository/user-repository";
import { UserRepository } from "../infrastructure/repository/user-repository";
import { TYPES } from "./types";
import { GetUsersService } from "../application/service/get-users-service";
import { IGetUsersService } from "../domain/service/get-users-service";
import { GetUsersController } from "../presentation/controller/get/get-users-controller";

const container = new Container();

container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IGetUsersService>(TYPES.IGetUsersService).to(GetUsersService);
container.bind<GetUsersController>(GetUsersController).toSelf();

export { container };
