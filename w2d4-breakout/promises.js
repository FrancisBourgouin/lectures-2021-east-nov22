const fridgeItemList = ["🦜", "🐉", "🎶"];

const fetchItemInFridgeAndDoSomething = (fridgeItemList, index, action) => {
	setTimeout(() => {
		if (Math.random() > 0.4) {
			if (fridgeItemList[index]) {
				return action(null, fridgeItemList[index]); // null, for no error
			}
			return action("nothing in fridge", null); // nothing in fridge error, no item
		}

		return action("fallen", null); // fallen is the error, no item
	}, 1000);
};

const fetchItemInFridgeAndDoSomethingPromises = (fridgeItemList, index) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.4) {
				if (fridgeItemList[index]) {
					// return action(null, fridgeItemList[index]); // null, for no error
					return resolve(fridgeItemList[index]);
				}
				// return action("nothing in fridge", null); // nothing in fridge error, no item
				return reject("nothing in fridge"); // nothing in fridge error, no item
			}

			return reject("fallen"); // nothing in fridge error, no item
			// return action("fallen", null); // fallen is the error, no item
		}, 1000);
	});
};

const showResult = (err, data) => {
	if (err) {
		return console.log("There was a problem", err);
	}
	return console.log("I picked this from the fridge", data);
};

// fetchItemInFridgeAndDoSomething(fridgeItemList, 4, showResult);
// fetchItemInFridgeAndDoSomething(fridgeItemList, 4, showResult);
// fetchItemInFridgeAndDoSomething(fridgeItemList, 4, showResult);
// fetchItemInFridgeAndDoSomething(fridgeItemList, 4, showResult);

// fetchItemInFridgeAndDoSomething(fridgeItemList, 4, (err, data) => {
//   showResult(err,data)
//   fetchItemInFridgeAndDoSomething(fridgeItemList, 4, showResult)
// });
console.log(fetchItemInFridgeAndDoSomethingPromises(fridgeItemList, 2));
console.log("Going to fetch things!");

const bob = fetchItemInFridgeAndDoSomethingPromises(fridgeItemList, 2)
	.then((item) => showResult(null, item))
	.then(() => fetchItemInFridgeAndDoSomethingPromises(fridgeItemList, 2))
	.then((item) => showResult(null, item))
	.catch((err) => showResult(err, null))
	.finally(() => console.log("All done!"));

console.log(bob);

setTimeout(() => console.log(bob), 3000);
