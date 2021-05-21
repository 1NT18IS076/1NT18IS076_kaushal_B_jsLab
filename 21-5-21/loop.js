// Title: make functions using arrays and loops
// Description: Implementing sort, filter and map operations on arrays
// Author: Kaushal@1NT18IS076
// Date: 21/5/21

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Nums before shuffle:");
console.log(nums);

nums.sort(() => 0.5 - Math.random());

console.log("Nums after shuffle:");
console.log(nums);

// nums.sort((a, b) => a - b); // this is for ascendeing order
nums.sort((a, b) => b - a);

console.log("Nums after sorting in descending order:");
console.log(nums);

console.log("Nums with even numbers:");

console.log(nums.filter((num) => num % 2 == 0));

console.log("Nums with odd numbers:");

console.log(nums.filter((num) => num % 2 == 1));

const people = [
  { id: 1, name: "Alex", age: 30 },
  { id: 2, name: "Henry", age: 24 },
  { id: 3, name: "Niko", age: 23 },
  { id: 4, name: "Lukas", age: 27 },
  { id: 5, name: "Chad", age: 25 },
];

console.log("All people:");
console.table(people);

console.log("People above 24 years:");
console.table(people.filter((person) => person.age > 24));

console.log("Only people's name and age:");
console.table(
  people.map((person) => ({ personName: person.name, personAge: person.age }))
);
