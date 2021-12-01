const someList = [];

const mystify = () => {
	const listOfFunctions = [];
	const specialFunction = () => {
		someList.push("Hey");
		console.log(someList.length);
	};
	for (let i = 0; i < 10; i++) {
		listOfFunctions.push(specialFunction);
	}
	return listOfFunctions;
};

const list = mystify();

// console.log(list);

console.log(someList);

list[0]();
console.log(someList);
list[1]();
console.log(someList);
