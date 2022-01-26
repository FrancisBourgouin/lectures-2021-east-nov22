const { basicRound, round } = require("./helper");

const someValue = 6.78;

const result = basicRound(someValue);

const otherResult = round({ value: 3.1415, symbol: "🥧" });
const otherOtherResult = round({ value: 3.1415, symbol: "$", price: true });

console.log(result, otherResult, otherOtherResult);

const submitTweet = (formData) => {
  // $.ajax(...)
};

$("form").on("submit", submitTweet);
