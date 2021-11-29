# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

# Data structures

## Item (object)

```jsx
const item = {
	name: String,
	price: Number,
};
```

## Items (array)

```jsx
const listOfItems = [item];
```

## Tax

```jsx
const QCTAX = 0.14975;
```

## Return

```jsx
const result = {
	amountOfItems: Number,
	subtotal: Number,
	taxAmount: Number,
	total: Number,
};
```

# Example

```jsx
  // Input
  const listOfItems = [{name:"Potato", price:0.99}, {name:"Pollo", price:4.99}]
  const tax = 0.14975

  // Output

  {
    amountOfItems:2,
    subtotal:5.98,
    taxAmount:0.90,
    total:6.88
  }

```

## What if?

- If tax is not a number, return null (maybe console.log(err))
- If listOfItems is not an array, return null

- If listOfItems is empty, return the object as usual
- If list and tax are valid, return the valid object

- If invalid item in the list, skip the item, console.log(invalid)
