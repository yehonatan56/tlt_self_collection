import express from "express";
import { remultExpress } from "remult/remult-express";
import { Item } from "../sherd/item";
import { whatsapp } from "./whatsapp";
import { startWhatsapp } from "./whatsapp-on-server";
import { config } from "dotenv";

import { createPostgresDataProvider } from "remult/postgres";
config();
const app = express();
const PORT = 3000;

app.use(
  remultExpress({
    dataProvider: createPostgresDataProvider({
      connectionString: process.env.DATABASE_URL,
    }),

    controllers: [whatsapp],
    entities: [Item],
  })
);
startWhatsapp();

app.use(express.static(process.cwd() + "/dist"));
app.listen(process.env["PORT"] || PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
