import { injectable } from "inversify";
import { User } from "../../domain/entity/user";
import { IUserRepository } from "../../domain/repository/user-repository";
import { SequelizeDatabase } from "../../../common/infrastructure/sequelize";

@injectable()
export class UserRepository implements IUserRepository {
  private db;
  constructor() {
    this.db = SequelizeDatabase.getInstance();
  }

  create(user: User): Promise<User> {
    return Promise.resolve(user);
  }

  delete(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  async findAll(): Promise<User[]> {
    const body = await this.db.query("SELECT * FROM users");
    return body;
  }

  findById(id: string): Promise<User | null> {
    return Promise.resolve(null);
  }
  update(id: string, user: User): Promise<User | null> {
    return Promise.resolve(null);
  }
}
