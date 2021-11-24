// Primitive data types

// Boolean => false
// Null => null is already falsy
// String => ""
// Undefined => undefined is already falsy
// Number => 0
// Symbol => no falsy
// BigInt => 0

// Data structures

// Array => never falsy!
// Object => never falsy!

const someObject = {
	name: "Bob",
};

console.log(someObject.name);
console.log(someObject["name"]);

const someObjectQuestionMark = {
	0: "Bob",
	1: "Robert",
};

console.log(someObjectQuestionMark[1]);
// console.log(someObjectQuestionMark.push("Alan"))
