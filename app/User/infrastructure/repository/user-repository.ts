import { injectable } from "inversify";
import { User } from "../../domain/entity/user";
import { IUserRepository } from "../../domain/repository/user-repository";

@injectable()
export class UserRepository implements IUserRepository {
  create(user: User): Promise<User> {
    return Promise.resolve(user);
  }

  delete(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  findAll(): Promise<User[]> {
    return Promise.resolve([]);
  }

  findById(id: string): Promise<User | null> {
    return Promise.resolve(null);
  }
  update(id: string, user: User): Promise<User | null> {
    return Promise.resolve(null);
  }
}
