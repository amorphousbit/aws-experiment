
let testArray = [ { name: "Jones" }, { name: "Tom" }, { name: "Peter" } ]

testArray.forEach((value, index, array) => {
    console.log(value, index, array);
    if (value.name === "Tom") array.splice(index, 1); // Remove current element
});


console.log(typeof 3);
console.log(typeof true);
console.log(typeof {});
console.log(typeof "hey!");

console.log("Apples" / 300);
console.log(NaN / 300);
console.log(typeof NaN);

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log("Behold the Binary Plus! " + (+apples + +oranges)); // 5

var x;
console.log(typeof x);

// Loose Equality operator
console.log(2 == "2");

// Strict Equality 
console.log(2 === "2");

// Implicit Type Coercion
console.log(5 + "9");
console.log(6 * "7");

// Type-casting aka Explict Type Coercion
console.log(2 === Number("2"));
console.log(String(2) === "2");

// Null coalescence
console.log(null ?? "But not null!")

// Let's do some math!
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4


