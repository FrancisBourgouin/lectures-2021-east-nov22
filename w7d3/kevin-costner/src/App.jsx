import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import WaterAllButton from "./components/WaterAllButton";

import { listOfPlants } from "./data/plants";

function App() {
  const [plants, setPlants] = useState(listOfPlants);
  const [number, setNumber] = useState(1);
  const plantList = Object.values(plants);

  const waterAPlant = (id) => {
    setPlants((pendingState) => {
      const updatedPlants = { ...pendingState };
      const updatedPlant = { ...updatedPlants[id] };

      updatedPlant.lastWateredDate = new Date();
      updatedPlants[id] = updatedPlant;
      console.log(updatedPlants);
      return updatedPlants;
    });
  };
  // const waterAPlant = (id) => {
  //   const updatedPlants = { ...plants };
  //   const updatedPlant = { ...updatedPlants[id] };

  //   updatedPlant.lastWateredDate = new Date();
  //   updatedPlants[id] = updatedPlant;
  //   console.log(updatedPlants);
  //   setPlants(updatedPlants);
  // };

  const waterAllThePlants = () => {
    const keys = Object.keys(plants);

    for (const key of keys) {
      waterAPlant(key);
    }
  };

  const addOne = () => setNumber(number + 1);
  const addFive = () => {
    console.log("RERENDERED!");
    // setNumber(number + 1); // number is 1
    // setNumber(number + 1); // number is 1
    // setNumber(number + 1); // number is 1
    // setNumber(number + 1); // number is 1
    // setNumber(number + 1); // number is 1
    setNumber((pendingState) => {
      console.log(pendingState);
      return pendingState + 4;
    });
    setNumber((pendingState) => {
      console.log(pendingState);
      return pendingState + 4;
    });
    setNumber((pendingState) => {
      console.log(pendingState);
      return pendingState + 4;
    });
    setNumber((pendingState) => {
      console.log(pendingState);
      return pendingState + 4;
    });
    setNumber((pendingState) => {
      console.log(pendingState);
      return pendingState + 4;
    });
  };
  return (
    <div className="App">
      <Header />
      <p>{number}</p>
      <button onClick={addOne}>add 1</button>
      <button onClick={addFive}>add 5</button>
      <PlantList plants={plantList} waterAPlant={waterAPlant} />
      <section>
        <WaterAllButton waterAllThePlants={waterAllThePlants} />
      </section>
    </div>
  );
}

export default App;
