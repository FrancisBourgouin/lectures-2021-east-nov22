import { useState } from "react";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import Spy from "./components/Spy";

import "./App.css";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [foundSpy, setFoundSpy] = useState(false);
  const updateCurrentCity = (city) => {
    setCurrentCity(city);
    setFoundSpy(false);
  };

  return (
    <div className="App">
      <Header />
      <CityForm updateCurrentCity={updateCurrentCity} />
      {currentCity && <Weather currentCity={currentCity} />}
      <Footer />
      {!foundSpy && <Spy onClick={() => setFoundSpy(true)} />}
    </div>
  );
}

export default App;
