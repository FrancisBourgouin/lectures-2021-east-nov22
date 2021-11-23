// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// Values from the terminal: process.argv => [strings]
// Add stuff together, + , +=
// Maybe we need to convert?
// Pos / Neg good
// Everything else, bad
const listOfNumbersFromProcessArgv = process.argv;
// get the array of values coming from process.argv

const sumOfCleanNumbers = function (listOfNumbers) {
	// Build a variable called total in which the values will be added to
	let total = 0;
	// Iterate (or loop) over the array of potential numbers
	for (const currentNumber of listOfNumbers) {
		// convert string to number Number()
		const parsedNumber = Number(currentNumber);
		const myNumberIsANaN = Number.isNaN(parsedNumber);
		if (!myNumberIsANaN) {
			// Add to total
			total += parsedNumber;
		}
	}
	// return total
	return total;
};

const result = sumOfNumbers(listOfNumbersFromProcessArgv);
const result1 = sumOfNumbers([3, 4, 5, 6, 7, 8, 9]);

console.log(result);
console.log(result1);

const coolSumOfCleanNumbers = function (listOfNumbers) {
	let total = 0;
	listOfNumbers.forEach(
		(num) => (total = Number.isNan(Number(num)) ? Number(num) : 0)
	);
	return total;
};
