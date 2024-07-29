import { BackendMethod } from "remult";

export class whatsapp {
  @BackendMethod({ allowed: true })
  static sendMessage(item: {
    pickupLocation: string;
    name: string;
    product: string;
    phone: string;
  }) {
    let msg;
    if (item.pickupLocation === "rishon") {
      msg = `שלום ${item.name}
תודה שקנית את ${item.product} 
ניתן לאסוף מרחוב דוד המלך 56  ראשון לציון 
מספר טלפון לתיאום הגעה: 0528997421 רינה
יש לתאם מראש
תודה`;
    } else {
      msg = `שלום ${item.name}
תודה שקנית  ${item.product} 
ניתן לאסוף מרחוב הר גלבוע 30 צפת
מספר טלפון לתיאום הגעה: 0523274505 שושנה 
יש לתאם מראש
תודה`;
    }
    let number = item.phone + "@c.us";

    whatsapp.client_sendMessage(number, msg);
  }
  static client_sendMessage: (number: string, msg: string) => void;
}
