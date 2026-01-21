// slice
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4);
console.log(sliced);

// some
let number = [1, 3, 5, 7, 9];
let hasEven = number.some(x => x % 2 === 0);
console.log(hasEven);

// every
let num= [2, 4, 6, 8, 10];
let allEven = num.every(x => x % 2 === 0); 
console.log(allEven);

// concat
let fruits1 = ["apple", "banana"];
let fruits2 = ["cherry", "orange"];
let combined = fruits1.concat(fruits2);
console.log(combined);

// splice
let fruit = ["apple", "banana", "cherry"];
let res=fruit.splice(1, 1, "orange", "grape"); 
console.log(res);

// reverse
let numb = [1, 2, 3, 4, 5];
numb.reverse();

// include
const array1 = [1, 2, 3];
console.log(array1.includes(2));
  
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

