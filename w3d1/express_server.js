const express = require("express");
const app = express();

app.use(express.static("public"));

const data = {
  ingredients: [
    { name: "Potato", group: "vegetable", calories: "not that much" },
    { name: "Cheese Curds", group: "dairy", calories: "more than potatoes" },
    { name: "Gravy", group: "carbs", calories: "more than potatoes and butter" },
  ],
  meals: [{ name: "Poutine", listOfIngredients: [0, 1, 2], isTasty: true }],
};

// GET route for / ("home")
app.get("/", (req, res) => {
  // Sends text for home page
  res.send("Welcome to the ingredient meals app thingy.");
});

// GET route for /ingredients
app.get("/ingredients", (req, res) => {
  res.json(data.ingredients);
});

// GET route for specific ingredient ( /ingredients/:ingredient_index)
app.get("/ingredients/:ingredient_index", (req, res) => {
  const ingredientIndex = req.params.ingredient_index;
  const ingredient = data.ingredients[ingredientIndex];

  res.send(`The ingredient is ${ingredient.name}, and has ${ingredient.calories} calories`);
});

app.get("/meals", (req, res) => {
  res.json(data.meals);
});

app.get("/meals/:meal_index", (req, res) => {
  const mealIndex = req.params.meal_index;
  const meal = data.meals[mealIndex];
  let ingredientList = "";
  meal.listOfIngredients.forEach((ingredientIndex, index) => {
    ingredientList += data.ingredients[ingredientIndex].name;
    if (index !== meal.listOfIngredients.length - 1) {
      ingredientList += ", ";
    }
  });
  res.send(`The meal is ${meal.name}, and has ${ingredientList} in it.`);
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;

  res.send(`
  
  <h1>Hello ${name} ! :D</h1>
    <a href="/bye/${name}">Going away?</a>
  `);
});
app.get("/bye/:name", (req, res) => {
  const name = req.params.name;

  res.send(`
  
    <h1>Bye ${name} ! :D</h1>
  `);
});

app.listen(8000);
