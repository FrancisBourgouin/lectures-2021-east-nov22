const fs = require("fs");

fs.readFile("./bob.txt", "utf8", (err, data) => {
	const text = "[" + data.replace(/\r\n/g, ",").replace(/[\r\n]/g, ",") + "]";
	const parsedData = JSON.parse(text);

	// console.log(parsedData);
	const newList = [];
	let count = 0;
	parsedData.forEach((value, index, arr) => {
		const threesum = arr[index] + arr[index + 1] + arr[index + 2];
		if (!Number.isNaN(threesum)) {
			newList.push(threesum);
		}
	});

	newList.forEach((value, index, arr) => {
		if (arr[index] - arr[index - 1] > 0) {
			count++;
		}
	});

	console.log(count);
});
