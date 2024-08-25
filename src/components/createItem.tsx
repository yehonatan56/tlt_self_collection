import React from 'react';
import { Formik, Form, Field } from "formik";
import { remult } from "remult";
import { Item } from "../sherd/item";
import { whatsapp } from "../backend/whatsapp";

// export default
const CreateItem = () => {
  // todo: put outside the component
  const repo = remult.repo(Item);

  const handleSubmit = async (values: any) => {
    // Handle form submission logic here
    await repo.insert(values);
    // whatsapp.sendMessage(values);
  };

  // todo: change to htmlFor label
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        product: "",
        status: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form id="create" style={{ display:'flex', flexDirection: 'column', gap: '1em' }}>

        <div style={{ display:'flex', gap: '1em' }}>
          <label htmlFor='name'>שם:</label>
          <Field id='name' type="text" name="name" style={{ color: "red" }} />
        </div>

        <div>
          <label>טלפון:</label>
          <Field type="text" name="phone" style={{ color: "blue" }} />
        </div>

        <label>
          מוצר:
          <Field type="text" name="product" style={{ color: "green" }} />
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
