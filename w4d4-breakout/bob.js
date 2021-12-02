const fs = require("fs"); // index.html file
const request = require("request"); // htttp request file

const originalNum = process.argv.slice(2);
console.log(originalNum);

request(originalNum[0], function (error, response, body) {
	console.log(originalNum);
	console.log(error);
	console.log(response);
	console.log(body);

	fs.writeFile(originalNum[1], body, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		//file written successfully
	});
});
