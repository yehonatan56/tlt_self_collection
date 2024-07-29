import express from "express";
import { remultExpress } from "remult/remult-express";
import { Item } from "../sherd/item";
import { whatsapp } from "./whatsapp";
import { startWhatsapp } from "./whatsapp-on-server";
const app = express();
const PORT = 3000;

app.use(
  remultExpress({
    controllers: [whatsapp],
    entities: [Item],
  })
);
startWhatsapp();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
