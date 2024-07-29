import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { whatsapp } from "./whatsapp";

const client = new Client({
  // Add your client options here
});
export const startWhatsapp = () => {
  client.on("ready", () => {
    console.log("Client is ready!");
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.initialize();
  whatsapp.client_sendMessage = async (number, msg) => {
    try {
      await client.sendMessage(number, msg);
    } catch (err: any) {
      console.error(err);
    }
  };
};
