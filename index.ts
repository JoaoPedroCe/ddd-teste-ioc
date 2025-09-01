import express from "express";
import route from "./app/User/presentation/routes/user-route";
import {
  initializeDatabase,
  SequelizeDatabase,
} from "./app/common/infrastructure/sequelize";

const app = express();
const port = 3000;

async function bootstrap() {
  initializeDatabase();
  try {
    await SequelizeDatabase.authenticate();
    console.log("✅ Banco conectado com sucesso");
  } catch (err) {
    console.error("❌ Erro ao conectar no banco:", err);
    process.exit(1);
  }
}

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
