import { Entity, Fields } from "remult";

@Entity("items", { allowApiCrud: true })
export class Item {
  // @Fields.cuid()
  // id='';
  @Fields.autoIncrement()
  id = 0;

  @Fields.string()
  name = "";

  @Fields.string()
  phone = "";

  @Fields.string()
  product = "";

  @Fields.string()
  status = "in_progress";

  @Fields.string()
  pickupLocation = "rishon";
}
