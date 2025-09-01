// infrastructure/database/SequelizeDatabase.ts
import {
  Options,
  QueryOptions,
  QueryOptionsWithType,
  QueryTypes,
  Sequelize,
  Transaction,
} from "sequelize";
import { Database } from "./database";

export class SequelizeDatabase extends Database {
  private static instance: SequelizeDatabase;
  private sequelize: Sequelize;

  private constructor(config: Options) {
    super();
    this.sequelize = new Sequelize(config);
  }

  static getInstance(config?: Options): SequelizeDatabase {
    if (!this.instance) {
      this.instance = new SequelizeDatabase(
        config ?? {
          database: "teste_ddd",
          username: "postgres",
          password: "root",
          host: "localhost",
          dialect: "postgres",
          logging: false,
        }
      );
    }
    return this.instance;
  }

  async query(
    sql: string,
    options?: QueryOptions | QueryOptionsWithType<QueryTypes.RAW>
  ): Promise<any> {
    const results = await this.sequelize.query(sql, options);
    return results;
  }

  transaction<T>(callback: (t: Transaction) => Promise<T>) {
    return this.sequelize.transaction(callback);
  }

  getSequelize() {
    return this.sequelize;
  }

  static authenticate() {
    return this.getInstance().sequelize.authenticate();
  }
}
