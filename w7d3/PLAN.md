# Watering Plants

Plant list with name, watering interval, last watered date, button to water each plant to reset the date.

# User stories

- User can see a list of plants
- Each plant can be with a red or green border depending on watering status
- User can water a plant by clicking on button
- User can water all the plants by clicking a special button

# Data Structures

## Plant

```jsx
  interface Plant {
    id: String
    name: String
    wateringInterval: Number
    lastWateredDate: Date
  }
```

## Plants

```jsx
  interface Plants [
    Plant
  ]
```

# Mock Data

```jsx
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

const listOfPlants = [plant1, plant2, plant3, plant4];

const betterListOfPlantsQuestionMark = {
  1: plant1,
  2: plant2,
  3: plant3,
  4: plant4,
};
```

# HTML Structure

- body
  - header
  - h1 WASSUP
  - section
    - article
      - h1 name of plant
      - p last watered on
      - button water
  - section
    - button water all plants

# Component Structure

- App
  - Header
  - PlantList
    - PlantListItem (receives props from PlantList)
  - WaterAllButton
