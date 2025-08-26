import { User } from "../../domain/entity/user";
import { IUserRepository } from "../../domain/repository/user-repository";

export class UserRepositoryFaker implements IUserRepository {
  create(user: User): Promise<User> {
    return Promise.resolve(user);
  }

  delete(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  findAll(): Promise<User[]> {
    return Promise.resolve([
      {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
      },
      {
        id: "2",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        age: 25,
      },
      {
        id: "3",
        name: "Alice Smith",
        email: "alice.smith@example.com",
        age: 28,
      },
      {
        id: "4",
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        age: 35,
      },
    ]);
  }

  findById(id: string): Promise<User | null> {
    return Promise.resolve(null);
  }

  update(id: string, user: User): Promise<User | null> {
    return Promise.resolve(user || null);
  }
}
