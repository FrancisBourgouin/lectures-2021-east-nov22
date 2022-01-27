import { useState } from "react";

export default function useControlledForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormData = { ...formData };
    newFormData[name] = value;

    setFormData(newFormData);
  };

  return [formData, handleChange];
}
