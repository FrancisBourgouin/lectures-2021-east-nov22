# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

# User Stories

- User can see all the plant names
- User can see at a glance if they need watering or not (red/green border)
- User can click on a plant to view more detail about it (stretch)

# Data Structure

## Plant

```jsx
const plant = {
  id: 1,
  name: "Some Plant",
  lastWatered: "2022-01-01",
  wateringIntervalInDays: 10,
};
```

## Plants

```jsx
const plants = [plant, plant];
```

# Mock data

```jsx
const plant1 = {
  id: 1,
  name: "Orchid",
  lastWatered: "2022-01-16",
  wateringIntervalInDays: 4,
};
const plant2 = {
  id: 2,
  name: "Monstera",
  lastWatered: "2021-12-01",
  wateringIntervalInDays: 300,
};
const plant3 = {
  id: 3,
  name: "Carrot",
  lastWatered: "2022-01-01",
  wateringIntervalInDays: 10,
};
const plant4 = {
  id: 4,
  name: "Snapdragon",
  lastWatered: "2021-01-01",
  wateringIntervalInDays: 9999,
};

const plants = [plant1, plant2, plant3, plant4];
```

# HTML Structure

<body>
  <header>
    <h1>
      title, amount of plants
  <section>
    <h1>
      title of section
    <article>
      <h1> 
        Name of the plant
      <p>
        Last watered

# React Components

```jsx
  <App> <- Data in here since Header & PlantList needs it
    <Header>
    <PlantList>
      <PlantListItem>
```
