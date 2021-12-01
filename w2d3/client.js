const net = require("net");

net.createConnection(3001, () => {
	console.log("connected!");
});
