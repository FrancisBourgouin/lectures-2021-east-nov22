import { useEffect, useState } from "react";
import axios from "axios";

export default function CurrentWeather(props) {
  // Showing when currentCity exists, State: weatherToaster, Props: currentCity
  const { currentCity } = props;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    axios
      .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${APIKEY}`)
      .then((res) => setWeatherData(res.data));
  }, []);
  return (
    <div className="CurrentWeather">
      {weatherData && (
        <>
          <h1>Current Weather</h1>
          <p>Currently at {weatherData.main.temp}K</p>
        </>
      )}
      {!weatherData && <h1>No weather data available</h1>}
    </div>
  );
}
