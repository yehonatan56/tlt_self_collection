import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
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
};
export const sendMessage = (item: {
  pickupLocation: string;
  name: string;
  price: string;
  phone: string;
}) => {
  let msg;
  if (item.pickupLocation === "rishon") {
    msg = `שלום ${item.name}
תודה שקנית את סדרת הספרים האוצרות האבודים 
אם עדיין לא שילמת הסכום הנדרש הוא ${item.price} שקלים 
ניתן לאסוף מרחוב דוד המלך 56  ראשון לציון 
מספר טלפון לתיאום הגעה: 0528997421 רינה
יש לתאם מראש
תודה`;
  } else {
    msg = `שלום ${item.name}
תודה שקנית את סדרת הספרים האוצרות האבודים 
אם עדיין לא שילמת הסכום הנדרש הוא ${item.price} שקלים 
ניתן לאסוף מרחוב הר גלבוע 30 צפת
מספר טלפון לתיאום הגעה: 0523274505 שושנה 
יש לתאם מראש
תודה`;
  }
  let number = item.phone + "@c.us";

  client.sendMessage(number, msg);
};
