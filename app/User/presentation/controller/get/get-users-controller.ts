import { Request, Response } from "express";
import { Controller } from "../../../../common/presentation/controller";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../ioc/types";
import { type IGetUsersService } from "../../../domain/service/get-users-service";

@injectable()
export class GetUsersController implements Controller {
  constructor(
    @inject(TYPES.IGetUsersService) private getUsersService: IGetUsersService
  ) {}

  async handle(req: Request, res: Response) {
    const users = await this.getUsersService.execute();
    return res.json(users);
  }
}
