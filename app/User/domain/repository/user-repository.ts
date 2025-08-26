import { User } from "../entity/user";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: string, user: User): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}
