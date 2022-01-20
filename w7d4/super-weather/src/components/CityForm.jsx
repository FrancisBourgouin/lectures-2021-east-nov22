import { useState } from "react";

export default function CityForm(props) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.updateCurrentCity(city);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // if (value.length < 10) {
    setCity(value);
    // }
    // axios.get("/").then(res => setSuggestions(res.data))
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
        placeholder="Enter the city name"
      />
      {/* input.addEventLister('change', handleChange) */}
      <button type="submit">Search</button>
    </form>
  );
}
