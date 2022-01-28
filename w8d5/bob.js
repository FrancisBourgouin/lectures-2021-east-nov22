const newSet = new Set();

newSet.add(1);
newSet.add(1);
newSet.add(1);
newSet.add(1);

console.log(newSet);

console.log(JSON.stringify(newSet));

const key = "name";
const otherKey = Symbol("name");

console.log(key, otherKey);

const someObj = {};
someObj[key] = 1;
someObj[otherKey] = 2;

console.log(someObj);
