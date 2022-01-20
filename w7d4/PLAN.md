# Weather Magic!

Type your city in a form, get the current weather for that city.

# User Stories

- Show a form where user can type their city name
- Show the weather info if the city is valid
- Add a button for a previously searched city (stretch)

# Data structures

## City

```jsx
const city = "";
```

## Cities

```jsx
const cities = ["", "", ""];
```

## Weather

```jsx
const weather = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

# HTML Structure

- body
  - header
    - h1 title
  - form
    - input (city name)
    - button
  - section
    - h1 name of city
    - p description
    - p temperature
  - footer
    - p copyright

# Component Structure

- App (currentCity)
  - Header
  - Form (city state)
  - Weather (S:weatherData, P:currentCity)
  - Footer
