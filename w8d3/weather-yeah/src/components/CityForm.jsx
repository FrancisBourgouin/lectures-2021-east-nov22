import { useState } from "react";

export default function CityForm(props) {
  // CityForm: Always showing, State: cityName, Props: onSubmit (updateCurrentCity)
  const [formData, setFormData] = useState({
    cityName: "",
  });
  const { cityName } = formData;

  // Object.keys(formData).map((input) => (
  //   <input
  //     type="text"
  //     name={input}
  //     placeholder={`Enter ${input}`}
  //     onChange={handleChange}
  //     value={formData[input]}
  //   />
  // ));

  // const handleChange = event => {
  //   const {name, value} = event.target

  //   const newFormData = {...formData}
  //   newFormData[name] = value

  //   setFormData(newFormData)
  // }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData({
      cityName: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        placeholder="Enter city"
        onChange={handleChange}
        value={cityName}
      />
      <button type="submit">Lookup weather</button>
    </form>
  );
}
