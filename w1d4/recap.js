// for..of
// Used with arrays, iterate over the values of the array

// Works with Array
// Doesn't work with Object
// Works with String
// Doesn't work with number

// for..in
// Used with objects, iterate over the keys of the object
const someObject = { a: 1, b: 2 };
for (const key in someObject) {
	someObject[key];
}

// {
//   const key = a
//   ...
// }
// {
//   const key = b
//   ...
// }

// Works with arrays, keys will be the index
// Works with object
// Works with string, will give the index

// c-style for
// General purpose, works with an index and an iteration operation

if (true) {
	const bob = "Hello";
}
const bob = "Hi";

console.log(bob);
