import { inject, injectable } from "inversify";
import { type IUserRepository } from "../../domain/repository/user-repository";
import { IGetUsersService } from "../../domain/service/get-users-service";
import { TYPES } from "../../ioc/types";

@injectable()
export class GetUsersService implements IGetUsersService {
  constructor(
    @inject(TYPES.IUserRepository) private userRepository: IUserRepository
  ) {}

  async execute() {
    return this.userRepository.findAll();
  }
}
