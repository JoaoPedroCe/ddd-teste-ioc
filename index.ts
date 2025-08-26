import express from "express";
import route from "./app/User/presentation/routes/user-route";

const app = express();
const port = 3000;

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
