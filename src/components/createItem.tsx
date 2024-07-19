import React, { useState } from "react";

const CreateItem: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form id="create" onSubmit={handleSubmit}>
      <label>
        שם:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          style={{ color: "red" }}
        />
      </label>
      <br />
      <label>
        טלפון:
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          style={{ color: "blue" }}
        />
      </label>
      <br />
      <label>
        מחיר:
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          style={{ color: "green" }}
        />
      </label>
      <br />
      <label>
        סטטוס:
        <select
          value={status}
          onChange={handleStatusChange}
          style={{ color: "purple" }}
        >
          <option value="in_progress">מחכה לאיסוף</option>
          <option value="completed">הושלם</option>
        </select>
      </label>

      <label>
        מיקופ איסוף:
        <select style={{ color: "orange" }}>
          <option value="type2">צפת</option>
          <option value="type3">ראשון</option>
        </select>
      </label>
      <br />
      <button type="submit">שלח</button>
    </form>
  );
};

export default CreateItem;
