// const child = require("./child");

const child = (name, action) => {
  console.log("wassup " + name);
  action(`${name}-wiggle`);
};

const parent = () => {
  const someObject = { name: "Bob" };
  const setName = (name) => (someObject.name = name);
  console.log(someObject);

  child("Trigun", setName);

  console.log(someObject);
};

parent();

function SomeComponent(props) {
  const [number, setNumber] = useState(1);
  const addTwo = () => setNumber(number + 2);

  return (
    <Button addTwo={addTwo} /> // Button({addTwo:addTwo})
  );
}
