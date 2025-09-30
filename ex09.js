// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

function sortByProperty(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
}

console.log(
  sortByProperty(
    [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
    "age"
  )
); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]
