const countDownGenerator = (amount) => {
  const showAmount = () => {
    console.log(amount);
  };

  return showAmount;
};

const amountOfTen = countDownGenerator(10);
const amountOfTwenty = countDownGenerator(20);

amountOfTen(); // => 10
amountOfTwenty(); // => 20
