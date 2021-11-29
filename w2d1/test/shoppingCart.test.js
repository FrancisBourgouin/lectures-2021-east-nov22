const expect = require("chai").expect;
const calculateCart = require("../shoppingCart");

describe("It should return null if there is an issue with the input", () => {
	it("should return null if the list of items is not an array", () => {
		const result = calculateCart("Ninja", 0.14975);

		expect(result).to.be.null;
	});
	it("should return null if the tax is not a number", () => {
		const result = calculateCart([], "0.14975");

		expect(result).to.be.null;
	});
});

describe("It should return the object when values are valid", () => {
	it("should return an object with every value being zero if the list is empty", () => {
		const listOfItems = [];
		const tax = 0.14975;

		const result = calculateCart(listOfItems, tax);
		const expectedResult = {
			amountOfItems: 0,
			subtotal: 0,
			taxAmount: 0,
			total: 0,
		};

		expect(result.amountOfItems).to.equal(expectedResult.amountOfItems);
		expect(result.subtotal).to.equal(expectedResult.subtotal);
		expect(result.taxAmount).to.equal(expectedResult.taxAmount);
		expect(result.total).to.equal(expectedResult.total);
	});
	it("should return an object with proper values if the list is populated", () => {
		const listOfItems = [
			{ name: "Potato", price: 0.99 },
			{ name: "Pollo", price: 4.99 },
		];
		const tax = 0.14975;

		const result = calculateCart(listOfItems, tax);
		const expectedResult = {
			amountOfItems: 2,
			subtotal: 5.98,
			taxAmount: 0.9,
			total: 6.88,
		};

		expect(result).to.deep.equal(expectedResult);
	});
	it("should return the object when a value inside the list invalid", () => {
		const listOfItems = [{ name: "Potato", price: 0.99 }, 4.99];
		const tax = 0.14975;

		const result = calculateCart(listOfItems, tax);
		const expectedResult = {
			amountOfItems: 1,
			subtotal: 0.99,
			taxAmount: 0.15,
			total: 1.14,
		};

		expect(result).to.deep.equal(expectedResult);
	});
});
