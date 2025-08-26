import { Transaction } from "sequelize";

export abstract class Database {
  abstract query<T = any>(sql: string, options?: object): Promise<T[]>;
  abstract transaction<T>(callback: (t: Transaction) => Promise<T>): Promise<T>;
}
