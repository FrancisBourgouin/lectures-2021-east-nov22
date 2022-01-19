```jsx

const SomeComponent = (props) => {
  // ...

  return (
    <div>
      <h1 style={{color:"blue"}} id="bob">Hello</h1>
      <SomeOtherComponent name="Bob">
    </div>
  );
};

```

```jsx
  <h1></h1>
  React.createElement('h1', 'Hello')

  <SomeOtherComponent name="Bob" />
  // {SomeOtherComponent({name:"Bob"})}
  React.createElement('SomeOtherComponent', {name:"Bob"})
```

```jsx
const someFunction = (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) => {
  // ...
};
const someFunction = (options) => {
  // ...
};

someFunction({ a: 1, b: 2, u: 9 });
```
