// key/value
// properties

const coffeePot = {
	isEmpty: false,
	materials: ["glass", "plastic"],
	capacity: 600,
};
const otherCoffeePot = {
	isEmpty: true,
	materials: ["ceramic", "plastic"],
	capacity: 200,
};

// const badCoffeePot = ["glass", false, 600]
// const materials = coffeePot.materials;
const key = "capacity";

const result = coffeePot.materials[0];
const otherResult = coffeePot[key];

console.log(result);
console.log(otherResult);

const listOfKeysToShow = ["capacity", "materials"];

for (const key of listOfKeysToShow) {
	console.log(coffeePot[key]);
}
for (const key of listOfKeysToShow) {
	console.log(otherCoffeePot[key]);
}

const someUser = {
	name: "Little Chicken",
	email: "pollo@pollo.com",
	password: "pockpock",
};
const userSafeFields = ["name", "email"];

console.log("Info for user");
for (const safeFieldKey of userSafeFields) {
	console.log(someUser[safeFieldKey]);
}

// dot notation, shortcut, only used when we litteraly know the key
// coffePot.capacity

// square brakect notation, general form, used when we don't know yet, or we want to use a variable
// const key = "capacity"
// coffePot[key]

console.log(coffeePot);
coffeePot.isDirty = true;

console.log(coffeePot);
