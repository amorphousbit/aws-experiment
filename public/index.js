

// Both of the following declarations and assignments are equivalent
//
const regx1 = /ab+c/g;
const regx2 = new RegExp("ab+c", "g");
const input = "abcdbabcdbsbz";


// Approach #1 - explicit invocation of iterator methods
//
console.log("\nexample #1: explicit iterator code");
const iterator1 = input.matchAll(regx2);
while (true) {
    const next = iterator1.next();
    if (next.done) {
        break;
    } else {
        console.log(next.value, next.done);
    }
}

// Approach #2 - using JS for...of, which is syntactic sugar
//
console.log("\nexample #2: for x of iterator");
const iterator2 = input.matchAll(regx2);
for (let x of iterator2) {
    console.log("Value", x);
}


