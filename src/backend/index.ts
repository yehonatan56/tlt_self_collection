import express from "express";
import { remultExpress } from "remult/remult-express";
import { Item } from "../sherd/item";
import { whatsapp } from "./whatsapp";
import { startWhatsapp } from "./whatsapp-on-server";
import Pool from "pg";
import { SqlDatabase } from "remult";
import { PostgresDataProvider } from "remult/postgres";

const pg = new Pool.Pool({
  connectionString: process.env.DB,
});
const app = express();
const PORT = 3000;

app.use(
  remultExpress({
    dataProvider: new SqlDatabase(new PostgresDataProvider(pg)),

    controllers: [whatsapp],
    entities: [Item],
  })
);
startWhatsapp();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
