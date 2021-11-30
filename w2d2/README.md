# Asynchronous Control Flow

## Today's menu

- Function recap
- Callback recap
- What is asynchronous?
- Playing with setTimeout
- Playing with the filesystem
- Playing with standard IO

## Today's file

- Recap
- Timeout
- FS
- Interval
- Stdin-out

## Recap - Higher Order Functions

### Functions as first-class objects (or first-class citizens)

- A function can be treated like any other variable. It can assigned to a variable, be passed as arguments to other functions, returned by another function.

### Higher-Order Function

- A higher-order function is a function that takes a function as parameters or return another function.

## Recap - Callback function

- A callback function is usually being passed as an argument to another function for mainly 2 purposes:

  1.Make a function more modular
  2.Used for asynchronous processes

- Example: a custom map function

```js
const map = (list, callback) => {
	const outputArr = [];

	for (const element of list) {
		outputArr.push(callback(element));
	}

	return outputArr;
};
```

## Asynchronous JS

What is Asynchronous JS?

- We are used to synchronous JS which performs tasks sequentially.

  - Things are more simple with synchronous code.
  - The drawback to run things in sequence is performance.

- JavaScript runs with a Single Thread

  - It has a single call stack
  - It can only do one thing at a time

  - So doing something that takes a long time such as reading a huge file, database operations, API calls, etc will **block the execution** for some time.
  - It can cause problems with highly interactive UI

- Asynchronous Javascript allows for tasks to be performed **without blocking** the code execution.

- However, dealing with async code makes things a bit more trickier.

## Async Control Flow

- setTimeout allows to run a function once after the interval of time
- setInterval allows to run a function regularly with the interval between the runs

```js
// syntax
const timerRef = setTimeout(callback, delay[, ...args])
// or
const timerRef = setInterval(callback, delay[, ...args])
```

- In what order will the console.logs execute?

```js
console.log("BEFORE CALL");

setTimeout(() => console.log("INSIDE CALL"), 1000);

console.log("AFTER CALL");
```

- What will each console.log output?

```js
let x = 1;
console.log("BEFORE CALL: ", x);

setTimeout(() => {
	x = 2;
	console.log("INSIDE CALL: ", x);
}, 1000);

console.log("AFTER CALL", x);
```

```js
const updateUsername = (callback) => {
	const data = { username: "Bob" };

	console.log("BEFORE TIMEOUT CALL");
	setTimeout(() => {
		data.username = "SpongeBob";
		callback();
		// what if we return data below? Like so:
		// return data;
	});

	console.log("AFTER TIMEOUT CALL");
	// okay, if not in the setTimeout callback above, what if we return data here? So that result below is set to the data. Like so:
	// return data;
};

console.log("BEFORE MAIN CALL");
const result = updateUsername(() => {
	console.log("INSIDE CALLBACK");
});
console.log({ result });
console.log("AFTER MAIN CALL");
```

- SleepSort function

```js
const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81];

// const sleepSort = function(nums) {
//   for (const num of nums) {
//     setTimeout(() => console.log(num), num);
//   }
};

sleepSort(numbers);
```

## Examples with fs module

- [Reading with readFileSync](./read_file_sync.js)
- [Reading with readFile (async)](./read_file_async.js)

## Events

- [stdin Example](./std.js)
- [EventEmitter Example](./events.js)

* Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

* The system will fire a signal of some kind when an event occurs, and also provide a mechanism by which some kind of action can be automatically taken (e.g. some code running) when the event occurs.

* We don't know when these events are occuring, so we need an asynchronous control flow.

  - An **Event Handler** is a callback function that will be called when an event is triggered.

  - A Main Loop listens for event triggers and calls the associated event handler for that event.

* [Event Loop](http://latentflip.com/loupe/)
