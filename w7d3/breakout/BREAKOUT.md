# Breakout!

## Existential Questions

- Passing down event handlers (props)
- Where is the data ?!?!?!?!
- HTML vs JS (When to use {}) {} => <%= EJS %>
- Why build from bottom
- Parent Child Relationships
- Spreading!
- Ninjarr

```jsx
function SomeForm(props){
  const [data, setData] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onSubmit(data)
  }

  return(
    <form onSubmit={handleSubmit}>
  )
}

<SomeForm onSubmit={(data) => console.log(data)} />



function Button(props) {
  const color = props.danger ? "red" : "green";
  const buttonStyle = { color };

  const yup = () => console.log("Hello!")

  return <button style={buttonStyle} onClick={props.onClick}>{props.children}</button>;
}

function SomeComponent(props) {
  return (
    <div>
      <Button danger onClick={() => console.log("what's up")}>Hello!</Button>
      // props {danger:true, onClick:() => console.log("what's up")}
    </div>
  );
}

function SomeOtherComponent(props) {
  return (
    <div>
      <Button>
        <>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
        </>
      </Button>
    </div>
  );
}

function RandomComponent(props) {
  const { user } = props;

  return(
    <div>
      <Profile user={{name:"bob"}}>
    </div>
  )
}

const addTwoNumbers = (numbers) => {
  return numbers.num1 + numbers.num2;
};

addTwoNumber({ num1: 4, num2: 5 });
```
