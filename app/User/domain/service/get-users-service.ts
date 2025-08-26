import { User } from "../entity/user";

export interface IGetUsersService {
  execute(): Promise<User[]>;
}
