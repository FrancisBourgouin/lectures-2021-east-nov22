import Header from "./components/Header";
import PlantList from "./components/PlantList";

import plants from "./data/plants";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
