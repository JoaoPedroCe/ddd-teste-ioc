// infrastructure/database/SequelizeDatabase.ts
import { Options, Sequelize, Transaction } from "sequelize";
import { Database } from "./database";

export class SequelizeDatabase extends Database {
  private static instance: SequelizeDatabase;
  private sequelize: Sequelize;

  private constructor(config: Options) {
    super();
    this.sequelize = new Sequelize(config);
  }

  public static getInstance(config?: Options): SequelizeDatabase {
    if (!SequelizeDatabase.instance) {
      if (!config)
        throw new Error(
          "Configuração do Sequelize é necessária na primeira inicialização."
        );
      SequelizeDatabase.instance = new SequelizeDatabase(config);
    }
    return SequelizeDatabase.instance;
  }

  async query(sql: string, options?: object): Promise<any[]> {
    const [results] = await this.sequelize.query(sql, options);
    return results;
  }

  async transaction<T>(callback: (t: Transaction) => Promise<T>): Promise<T> {
    return this.sequelize.transaction(callback);
  }

  getSequelizeInstance(): Sequelize {
    return this.sequelize;
  }
}

export function initializeDatabase() {
  SequelizeDatabase.getInstance({
    database: "meu_banco",
    username: "root",
    password: "senha",
    host: "localhost",
    dialect: "mysql",
    logging: false,
  });
}
