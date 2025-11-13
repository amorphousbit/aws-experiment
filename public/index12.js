// const myMap = new Map();

// const key1 = { id: "12398789t32t7" };
// const key2 = { id: "334589892dsg9" };
// const key3 = { id: "4909092dfGR$T" };

// myMap.set(key1, { record: "ABB3111" })
// myMap.set(key2, { record: "GBB3113" })
// myMap.set(key3, { record: "LBB3115" })

// for (let key of myMap.keys()) {
//     console.log(key);
// }

// const object3 = { 
//     a: { record: "ABB3111" },
//     b: { record: "GBB3113" },
//     c: { record: "LBB3115" },
// }

// for (let key in object3) {
//     console.log(key);
// }



// Key difference between for...in and for...of - pay attention!
//
// const arrayTest = [  "a", "b", "j", "z", "d", "e" ]

// for (let i in arrayTest) {
//     console.log(i);
// }

// for (let i of arrayTest) {
//     console.log(i);
// }


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

