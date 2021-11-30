const questions = ["Are you all ok?", "Everybody good?"];

const showMessage = () => {
	if (index % 2 === 0) {
		console.log(questions[0]);
	} else {
		console.log(questions[1]);
	}
	index++;
};

// for (let i = 0; i < 10; i++) {
// 	setTimeout(() => showMessage(i), 1000 * i);
// }

let index = 0;
const intervalId = setInterval(showMessage, 1000);

setTimeout(() => clearInterval(intervalId), 10000);
