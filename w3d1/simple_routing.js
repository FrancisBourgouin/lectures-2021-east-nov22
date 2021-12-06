// ingredients / ingredient: calories, name, group
// meals: name, list of ingredients, isTasty

// /ingredients -> All ingredients
// /ingredients/0 -> Specific ingredient
// /meals -> All meals
// /meals/1 -> Specific meal

const data = {
  ingredients: [
    { name: "Potato", group: "vegetable", calories: "not that much" },
    { name: "Cheese Curds", group: "dairy", calories: "more than potatoes" },
    { name: "Gravy", group: "carbs", calories: "more than potatoes and butter" },
  ],
  meals: [{ name: "Poutine", listOfIngredients: [0, 1, 2], isTasty: true }],
};

const extractThemeAndIndex = (url) => {
  return {
    theme: url.split("/")[1],
    index: url.split("/")[2],
  };
};

const generateMessage = (theme, index) => {
  if (theme === "ingredients") {
    const ingredient = data.ingredients[index];
    return `The ingredient is ${ingredient.name}, and has ${ingredient.calories} calories`;
  }
  if (theme === "meals") {
    const meal = data.meals[index];
    let ingredientList = "";
    meal.listOfIngredients.forEach((ingredientIndex, index) => {
      ingredientList += data.ingredients[ingredientIndex].name;
      if (index !== meal.listOfIngredients.length - 1) {
        ingredientList += ", ";
      }
    });
    return `The meal is ${meal.name}, and has ${ingredientList} in it.`;
  }
};

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const themeAndIndex = extractThemeAndIndex(req.url);

  const generatedMessage = generateMessage(themeAndIndex.theme, themeAndIndex.index);

  return res.end(generatedMessage);
});

server.listen(8000);
