// setTimeout(() => {
// 	console.log("Hello");
// 	setTimeout(() => {
// 		console.log("Hi there");
// 		setTimeout(() => console.log("How are you?"), 1000);
// 	}, 1000);
// }, 1000);

const conversation = [
	"Hello there",
	"Hi there",
	"How are you?",
	"Good good.",
	"Nice.",
];

// for (let i = 0; i < conversation.length; i++) {
// 	setTimeout(() => console.log(conversation[i]), 1000 * i);
// }
// Set timeout
// ...
// Asynchronous callback happens
// console.log hello
// set a timeout
// ...
// Asynchronous callback happens
// console.log hi
// set a timeout
// ...
// Asynchronous callback happens
// console.log how are you
// ...

let bob = "Robert";

setTimeout(() => console.log(bob), 00);
setTimeout(() => console.log(bob, bob), 00);

// SYNC | 0ms | 1000ms

bob = "Bobby";
