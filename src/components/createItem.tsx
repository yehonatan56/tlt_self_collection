import { Formik, Form, Field } from "formik";
import { remult } from "remult";
import { Item } from "../sherd/item";
import { sendMessage } from "../backend/whatsapp";

const CreateItem = () => {
  const repo = remult.repo(Item);

  const handleSubmit = async (values: any) => {
    // Handle form submission logic here
    await repo.insert(values);
    sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        price: "",
        status: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form id="create">
        <label>
          שם:
          <Field type="text" name="name" style={{ color: "red" }} />
        </label>
        <br />
        <label>
          טלפון:
          <Field type="text" name="phone" style={{ color: "blue" }} />
        </label>
        <br />
        <label>
          מחיר:
          <Field type="text" name="price" style={{ color: "green" }} />
        </label>
        <br />
        <label>
          סטטוס:
          <Field as="select" name="status" style={{ color: "purple" }}>
            <option value="in_progress">מחכה לאיסוף</option>
            <option value="completed">הושלם</option>
          </Field>
        </label>

        <label>
          מיקופ איסוף:
          <Field as="select" name="pickupLocation" style={{ color: "orange" }}>
            <option value="zefat">צפת</option>
            <option value="rishon">ראשון</option>
          </Field>
        </label>
        <br />
        <button type="submit">שלח</button>
      </Form>
    </Formik>
  );
};

export default CreateItem;
