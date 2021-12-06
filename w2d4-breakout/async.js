// Async -> There is an asynchronous instruction in our code

const fridgeItemList = ["🦜", "🐉", "🎶"];

const fetchItemInFridge = (fridgeItemList, index) => {
	setTimeout(() => {
		console.log(`I got ${fridgeItemList[index]}`);
	}, 1000);
};

const fetchItemInFridgeAndDoSomething = (
	fridgeItemList,
	index,
	doSomething
) => {
	setTimeout(() => {
		console.log(`I got ${fridgeItemList[index]}`);
		doSomething();
	}, 1000);
};

// setTimeout(() => {
//   console.log(`I got ${fridgeItemList[index]}`);
//   () => {
//     setTimeout(() => {
//       console.log(`I got ${fridgeItemList[index]}`);
//       () => {
//         setTimeout(() => {
//           console.log(`I got ${fridgeItemList[index]}`);
//           doSomething();
//         }, 1000);
//       });
//     }, 1000);

//   }
// }, 1000);

setTimeout(() => console.log("Rawr"), 1000);
setTimeout(() => console.log("Rawr"), 1000);
setTimeout(() => console.log("Rawr"), 1000);

// Start the timer sync
setTimeout(() => {
	// Start the callback after timer is done
	console.log("Rawr");
	setTimeout(() => {
		// Start the callback after timer is done
		console.log("Rawr");
	}, 1000);
}, 1000);

// const sayAllDone = () => console.log("All done!");

// const fetchItemIndexTwoAndSayAllDone = () => {
// 	fetchItemInFridgeAndDoSomething(fridgeItemList, 2, sayAllDone);
// };

// const fetchItemIndexOneThenIndexTwoThenSayAllDone = () => {
// 	fetchItemInFridgeAndDoSomething(
// 		fridgeItemList,
// 		1,
// 		fetchItemIndexTwoAndSayAllDone
// 	);
// };

// fetchItemInFridgeAndDoSomething(
// 	fridgeItemList,
// 	0,
// 	fetchItemIndexOneThenIndexTwoThenSayAllDone
// );

fetchItemInFridgeAndDoSomething(fridgeItemList, 0, () => {
	fetchItemInFridgeAndDoSomething(fridgeItemList, 1, () => {
		fetchItemInFridgeAndDoSomething(fridgeItemList, 2, () =>
			console.log("All done!")
		);
	});
});

// fetchItemInFridge(fridgeItemList, 0);
// fetchItemInFridge(fridgeItemList, 1);
// fetchItemInFridge(fridgeItemList, 2);

// setTimeout(() => {
//   console.log(`I got ${fridgeItemList[0]}`);
// }, 1000);
// setTimeout(() => {
//   console.log(`I got ${fridgeItemList[1]}`);
// }, 1000);
// setTimeout(() => {
//   console.log(`I got ${fridgeItemList[2]}`);
// }, 1000);
