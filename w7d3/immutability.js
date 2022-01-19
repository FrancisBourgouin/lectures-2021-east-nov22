// // Immutability

// let someNumber = 5;
// let someOtherNumber = someNumber;

// someOtherNumber = 10;

// console.log(someNumber + someOtherNumber);

// const someArray = [1, 2];
// const someOtherArray = [...someArray];

// // for (const number of someArray) {
// //   someOtherArray.push(number);
// // }

// someOtherArray[0] = 6;

// console.log(someArray[0] + someArray[1] + someOtherArray[0] + someOtherArray[1]);

// const someFunkyObject = { a: { num: 1 } };
// const something = someFunkyObject.a;
// something.num = 5;
// console.log(something, someFunkyObject);

const plant1 = {
  id: "1",
  name: "Dragon Tree",
  wateringInterval: 30,
  lastWateredDate: new Date("2020-01-01"),
};
const plant2 = {
  id: "2",
  name: "Fern",
  wateringInterval: 2,
  lastWateredDate: new Date("2022-01-19"),
};
const plant3 = {
  id: "3",
  name: "Tulip",
  wateringInterval: 7,
  lastWateredDate: new Date("2022-01-01"),
};
const plant4 = {
  id: "4",
  name: "Linked List",
  wateringInterval: 9999,
  lastWateredDate: new Date("2024-01-01"),
};

const listOfPlants = [plant1, plant2];

const listOfPlantsObj = {
  1: plant1,
  2: plant2,
  3: plant3,
  4: plant4,
};

const newListOfPlants = [...listOfPlants, plant3, plant4];

// newListOfPlants[0].name = "Dragonball Tree";

// const updatedPlant = { ...newListOfPlants[0] };
// updatedPlant.name = "Dragonball Tree";

// newListOfPlants[0] = updatedPlant;

const updatedPlant = { ...newListOfPlants.find((plant) => plant.id === "1") };
const updatedPlantIndex = newListOfPlants.findIndex((plant) => plant.id === "1");
updatedPlant.name = "Dragonball Tree";

newListOfPlants[updatedPlantIndex] = updatedPlant;

console.log(listOfPlants, newListOfPlants);

const newListOfPlantsObj = { ...listOfPlantsObj };
const updatedPlant = { ...newListOfPlantsObj["1"], name: "Dragonball Tree" };
newListOfPlantsObj["1"] = updatedPlant;
// [{1},{2}]
// {1} => new {1}
// {11} => [{11},{2}]
