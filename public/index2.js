
// alert("you parsed the script - didn't cha!");
//

//sum(1)(2) = 3
//sum(5)(-1) = 4
// let a;
// console.log(a);

// let sum = function(x) {
//     return function(y) {
//         return  x + y;
//     }
// }
// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// JavaScript Array manipulation
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(x, y) {
//     return function(input) {
//         return input >= x && input <= y; 
//     }
// }
// function inArray(array) {
//     return function(input) {
//         return array.includes(input);
//     }
// }
//alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
//alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6



// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ]
// // A negative value indicates that a should come before b.
// // A *positive* value indicates that *a* should come *after* b.

// function byField(field) {
//     return (a, b) => {
//         let compare = a[field] > b[field];
//         console.log(a[field], b[field], compare);
//         return compare ? 1 : -1;
//     }
// }

// function byName() {
//     return (a, b) => {
//         console.log(a.name, b.name, a.name < b.name);
//         return a.name > b.name ? 1 : -1;
//     }
// }
// function byAge() {
//     return (a, b) => {
//         console.log(a.age, b.age, a.age > b.age);
//         return (a.age > b.age) ? 1 : -1;
//     }
// }

// console.log(users.toSorted(byAge('age')));
// console.log(users.toSorted(byField('name')));
// console.log(users.toSorted(byName()));

// console.log([ { name: 'Aleks'}, { name: 'Bert'}, { name: 'Charlie'}, ].map(x => x.name));

// let arr1 = [ 1, 2, 3, 4, 5 ];  
// console.log(arr1.pop());
// arr1.push(12);
// console.log(arr1);

// let arr2 = [ 1, 2, 3, 4, 5 ];  
// console.log(arr2.shift());
// arr2.unshift(12);
// console.log(arr2);

// const array = ["a", "b", "c"];
// const iterator = array.values();
// for (const value of iterator) {
//   console.log(value);
// }

// const array2 = [1, 2, 3];
// const iterator2 = array2[Symbol.iterator]();
// for (const value of iterator2) {
//   console.log(value);
// }

function func1(a, b, c) {
  console.log(arguments.length);

  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

// func1(33, 44, 55)
