import { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null); // 1 6
  const { currentCity } = props; // 2 7

  console.log("RERENDERED");

  useEffect(() => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d"; // 3 8
    axios
      .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${APIKEY}`) //4 9
      .then((res) => setWeatherData(res.data)) //5 10
      .catch((err) => setWeatherData(null));
  }, [currentCity]);

  return (
    <section>
      {weatherData && (
        <Fragment>
          <h1>Weather for: {currentCity}</h1>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp}</p>
        </Fragment>
      )}
      {!weatherData && <h1>No weather data for {currentCity}</h1>}
    </section>
  );
}
