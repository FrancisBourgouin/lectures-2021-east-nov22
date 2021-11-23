// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// Values from the terminal: process.argv => [strings]
// Add stuff together, + , +=
// Maybe we need to convert?
// Pos / Neg good
// Everything else, bad

// sum ? sumNumber ? SumofArgs ?

// const sumOfNumbersComingFromProcessArgv
// console.log(process.argv);
// console.log(process.argv.slice(2));

// const bob = [1, 2, 3, 4];
// for (const number of bob) {
// }
// for (let i = 0; i < bob.length; i++) {
// 	const number = bob[i];
// }
const sumOfNumbers = function () {
	// get the array of values coming from process.argv
	const listOfNumbers = process.argv.slice(2);
	// Build a variable called total in which the values will be added to
	let total = 0;
	// Iterate (or loop) over the array of potential numbers
	for (const currentNumber of listOfNumbers) {
		// convert string to number Number()
		const parsedNumber = Number(currentNumber);
		const myNumberIsANaN = Number.isNaN(parsedNumber);
		if (!myNumberIsANaN) {
			total += parsedNumber;
		}
		// Add to total
		// total = total + parsedNumber
	}
	// return total
	return total;
};

const result = sumOfNumbers();

console.log(result);
