# W8D4 - Class Components in React

## Today's menu

- Class recap
- Building a functionnal small app (Github Viewer)
- Lifecycle method (water cycle, but harder)
- Building a classy small app (Github Viewer)
- Main difference between Hooks & Class based approaches
- React class reference

## Classes like this class? (No.)

Classes in programming ! Before hooks, we used to build React apps with Class components. Here are the key differences of class components:

## JavaScript Classes quick review

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 classalike semantics.

```jsx
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea(){
    return this.height * this.width
  }
}

const myRectangle = new Rectangle(100,100)

myRectangle.getArea()

```

## Key differences

- Instead of using multiple smaller functions, we group them up inside Class methods
- When using Class components, Hooks are off the plate!
- Inside a class component, we must use the `this` keyword
- class components use lifecycle methods instead of hooks
- if the component needs a state, use a class component. If the component does not need to use state, just create a functional stateless component

## Lifecycle Methods

Instead of relying on hooks, class components are using lifecycle methods. We've looked at the following diagram:

- [Lifecycle Methods](./lifecycle.jpeg)

## Classes in React

### Basic form

```jsx
class World extends Component {
	render() {
		return (
			<div>
				<hello world/>
			</div>
		)
	}
}
```

### Receiving props

Using `the` constructor, we can get props passed into our component. 

```jsx
class World extends Component {
	constructor(props) {
		super(props);
		console.log(props)
	}

	render() {
		return (
			<div>
				<hello world/>
				{this.props.name}
			</div>
		)
	}
}
```
**Notice:** the `this` keyword. Due to the fact of the scope of variables, We use the `this` keyword to get values like `props`, `state`, and function calls that we may define.

### Holding State

Other than props, components can have state.

```jsx
class World extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1
		}
	}

	addNum = () => {
		this.setState(prev => {...prev, num: prev.num + 1})
	}


	render() {
		return (
			<div>
				<hello world/>
				{this.props.name}
				{this.state.num}
				<button onClick={addNum}>Click Me</button>
			</div>
		)
	}
}
```

### Lifecycle methods

Don't forget to have a look at the lifecycle method image in the notes also!

```jsx
class World extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1
		}
	}

	addNum = () => {
		this.setState(prev => {...prev, num: prev.num + 1})
	}
  	componentDidMount() {
  		//...
  	}
  	componentDidUpdate(prevProps, prevState, snapshot) {
    	//...
  	}
  	componentWillUnmount() {
    	//...
  	}

	render() {
		return (
			<div>
				<hello world/>
				{this.props.name}
				{this.state.num}
				<button onClick={addNum}>Click Me</button>
			</div>
		)
	}
}
```


