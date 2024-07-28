import express from "express";
import { remultExpress } from "remult/remult-express";
import { Item } from "../sherd/item";
import { startWhatsapp } from "./whatsapp";
const app = express();
const PORT = 3000;

app.use(
  remultExpress({
    entities: [Item],
  })
);
startWhatsapp();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
