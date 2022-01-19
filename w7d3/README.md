#  Immutable Data Patterns

## Recap - Components, Props & State

### Components

- Components are the building blocks of react
- Take a functionality of a small piece of your application and encapsulated its own isolated container
- A component encapsulate or hide the underlying complexity of what's going on(state, events, etc)
- You build a large app out of multiple smaller apps

### Props

- Props are to components what attributes are to an HTML element 
  (the 'src' tag in an <img> is needed to make the image work)
- Props are arguments given to the component so that it can do it's job properly
- Props are accessible in an object in the first argument of a functional component

### State

- State is information that our app uses and modifies
- State is built to be changed during the course of our app
- Using state with functional components needs the useState hook

## Immutable Data Patterns with Arrays and Objects

Immutability is an important concept of `Functional Programming`.

From Wikipedia

> In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

In other words...

- Don’t mutate data, and if you have to – create a clone and mutate it.
- Reuse unchanged parts. Only changed parts should be changed.

### Benefits of immutability

- Immutable data structure are simpler to construct, test, and use
- Truly immutable values are always thread-safe
- Immutable data is side-effect free (avoids unexpected bugs hard to detect)
- You can quicky compare the previous and the new version

Some libraries enforce immutability

- [immutable js](https://immutable-js.github.io/immutable-js/)
- [mori](https://swannodette.github.io/mori/)
- [Rambda js](https://ramdajs.com/)

### Arrays

- An array is not immutable in JavaScript
- we need to use only the pure array methods and the spread operator
- The pure array methods are the ones that create a new array when something changes

  - pop(), push() and splice() are not pure
  - concat(), slice() are pure

[Immutable Arrays](https://codesandbox.io/s/strange-neumann-j5g5y)

### Objects

[Immutable Objects](https://codesandbox.io/s/modest-pare-28lgm)
