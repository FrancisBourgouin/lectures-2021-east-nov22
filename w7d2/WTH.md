# What was hard during weekend

- Refactoring
- Props are confusing +5
- Component usage
- Adv JS (Spread)
- State
- JSX vs EJS

## JSX

JSX is a templating language, JavaScript & XML, HTML-like syntax

EJS: `<p><%= user.name %></p>` HTML that gets parsed with special tags ran by EJS engine
ERB: `<p><%= user.name %></p>` HTML that gets parsed with special tags ran by ERB engine
PHP: `<p><?php echo user.name ?></p>` HTML in which special tags get executed by PHP engine

JSX: `<p>{user.name}</p>` : `react.createElement('p', user.name)`, JSX gets parsed to JS, generates HTML

React Component :

```jsx
const SomeComponent = (props) => {
  return (
    <div>
      {" "}
      react.createElement('div')
      <p>{props.user.name}</p>
    </div>
  );
};
```

Props

```jsx
  const App = () => {
    const user = {name:"bob"}
    return(
      <div>
        <SomeComponent user={user} color="red" potato={true} /> => props => {user:user, color:"red", potato:true}
        // {SomeComponent(user, color, potato)}
      </div>
    )
  }
```

```jsx
const round = (value) => {
  //...
};

const calculateTotal = (subtotal, tax) => {
  round(subtotal + tax);
};
```

```jsx
  const ajax = (url, method, dataType, data, body, ...)

  $.ajax(url, method, null, data)


  $.ajax({
    url:"",
    method:"",
    data:""
  })
```

Encore
