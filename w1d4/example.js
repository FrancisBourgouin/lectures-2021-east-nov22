const sum = function (num1, num2) {
	return num1 + num2;
};

const addition = sum;

// addition(2,2) sum(2,2)

const multiply = function (num1, num2) {
	return num1 * num2;
};

const divide = function (num1, num2) {
	return num1 / num2;
};

const funStuff = function (num1, num2, action1, action2) {
	const result1 = action1(num1, num2);
	const result2 = action2(num1, num2);

	console.log(result1 + result2);
};

funStuff(2, 2, sum, multiply);
funStuff(2, 2, sum, divide);
