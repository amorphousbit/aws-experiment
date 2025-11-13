
console.log(parseFloat("122354.43545454"));

let x = new Number("123145545");
console.log(x + 3)

console.log(parseInt("101110111111", 2));
console.log(parseInt("11", 16));


const objectTest = { 
    a: { record: "ABB3111" },
    b: { record: "GBB3113" },
    c: { record: "LBB3115" },
};


// Iterate over "the enumerable property keys"
for (let j in objectTest) {
    console.log(j);
}

// Will not work - old school object is not iterable!
// for...of traverses iterable objects (Array, String, NodeList (?), etc. )
for (let j of objectTest) {
    console.log(j);
}


function letsThroughGitThruALoop() {
    let localTest = 123;
    const name = "Archibald Baskerville";
}

