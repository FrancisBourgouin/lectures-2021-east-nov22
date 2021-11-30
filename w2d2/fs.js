const fs = require("fs"); //1

let message = "original"; //2

const showMessageInConsole = (err, data) => {
	console.log("The message is:");
	console.log(data);
};

// fs.readFile("./bob.txt", "utf8", showMessageInConsole);

// console.log(message); //4

const messageToWrite = "🐔🐔🐔";
// fs.writeFile("./chicken.txt", messageToWrite, "utf8", (err) =>
// 	console.log(err)
// );

for (let i = 0; i < 10; i++) {
	fs.readFile("./chicken.txt", "utf8", (err, data) => {
		if (err) {
			return console.log(err);
		}
		const currentStuffInTheFile = data;
		const newContent = currentStuffInTheFile + messageToWrite;
		fs.writeFile("./chicken.txt", newContent, "utf8", (err) =>
			console.log("Message post write", err)
		);
	});
}

const appendSomeChickens = () => {
	// Start reading the file
	fs.readFile("./chicken.txt", "utf8", (err, data) => {
		// 🐔🐔🐔
		// Done reading the file
		if (err) {
			return console.log(err);
		}
		const currentStuffInTheFile = data;
		const newContent = currentStuffInTheFile + messageToWrite;
		// Start writing the file
		fs.writeFile("./chicken.txt", newContent, "utf8", (err) => {
			// Done writing the file
			console.log("Message post write", err);
			if (newContent.length < 6000) {
				appendSomeChickens();
			}
		});
	});
};

appendSomeChickens();
