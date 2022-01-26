import { useState } from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import CityHistoryList from "./components/CityHistoryList";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [previousCities, setPreviousCities] = useState([]);

  const updateCurrentCity = (formData) => {
    setCurrentCity(formData.cityName);
    if (!previousCities.includes(formData.cityName)) {
      setPreviousCities([...previousCities, formData.cityName]);
    }
  };

  return (
    // State: previousCities, currentCity
    <div className="App">
      <h1>Weather Life</h1>
      {/* Always showing, State: cityName, Props: onSubmit (updateCurrentCity) */}
      <CityForm onSubmit={updateCurrentCity} />
      {/* Showing when previousCities.length > 1, Props: previousCities */}
      {previousCities.length > 0 && (
        <CityHistoryList
          previousCities={previousCities}
          updateCurrentCity={updateCurrentCity}
        />
      )}
      {/* Showing when currentCity exists, State: weatherToaster, Props: currentCity */}
      {currentCity && <CurrentWeather currentCity={currentCity} />}
    </div>
  );
}

export default App;
