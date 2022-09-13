import React, { useState } from "react";
import { v4 } from "uuid";

const NewBoxForm = ({ addItem }) => {
  const INITIAL_STATE = {
    id: "",
    backgroundColor: "",
    height: "",
    width: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(v4(), formData.backgroundColor, formData.height, formData.width);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">backgroundColor</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="height">height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />
      <p>{formData.id}</p>
      <p>{formData.backgroundColor}</p>
      <p>{formData.height}</p>
      <p>{formData.width}</p>
      <button>Add Item</button>
    </form>
  );
};

export default NewBoxForm;
