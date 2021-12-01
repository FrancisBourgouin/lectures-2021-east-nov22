// Server steps

// 1 - Define the server
// 2 - Say to the server to listen
// 3 - In the event of a connection
//  1 - assign an id to the connection object
//  2 - push to connection to the list of connections
//  3 - define event handlers for receiving data
//    1 - We broadcast to everybody but the sender

// Chat server!
const chicken = "🐔";
const net = require("net");

const broadcast = (listOfConnections, message) => {
	for (const conn of listOfConnections) {
		conn.write(`🦜: ${message}`);
	}
};

const betterBroadcast = (listOfConnections, message, senderId) => {
	for (const conn of listOfConnections) {
		if (conn.id !== senderId) {
			conn.write(`🦜: ${message} ${chicken}`);
		}
	}
};

const listOfConnections = [];

const coolChatServer = net.createServer((connection) => {
	// Assign a specific id to each connection so that we can broadcast properly
	connection.id = listOfConnections.length;
	listOfConnections.push(connection);

	// Confirm that we have a new connection, on the server side
	console.log("Hey we got a new connection!");

	// Sets the encoding so that we see the message, not the buffer
	connection.setEncoding("utf8");

	// Send a message to welcome the user on the connection event
	connection.write(`Hello random person ${listOfConnections.length}\n`);

	// In the event of receving data from a specific connection
	connection.on("data", (data) => {
		console.log(data);
		// connection.write(`🦜: ${data}`);
		// broadcast(listOfConnections, data);

		// Send a message to everybody but the sender
		betterBroadcast(listOfConnections, data, connection.id);
	});
});

coolChatServer.listen(3001, () => {
	console.log("Server is ready!");
});
