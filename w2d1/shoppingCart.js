// Item looks like
// const item = {
// 	name: String,
// 	price: Number,
// };
const fancyRound = (number, decimalPoint) => {
	const multiplier = Math.pow(10, decimalPoint);
	const roundedValue = Math.round(number * multiplier) / multiplier;

	return roundedValue;
};

const calculateCart = (listOfItems, taxPercentage) => {
	if (!Array.isArray(listOfItems) || typeof taxPercentage !== "number") {
		return null;
	}

	const output = {
		amountOfItems: 0,
		subtotal: 0,
	};

	for (const item of listOfItems) {
		if (item && item.price) {
			output.subtotal += item.price;
			output.amountOfItems++;
		}
	}

	output.taxAmount = fancyRound(output.subtotal * taxPercentage, 2);
	output.total = fancyRound(output.taxAmount + output.subtotal, 2);

	return output;
};

module.exports = calculateCart;
