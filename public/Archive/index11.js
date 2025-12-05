
const records = [
    { id: 1, name: "ABC Bartender", balance: 100 },
    { id: 2, name: "Billy Concrete", balance: 100 },
    { id: 3, name: "Company XYZ", balance: 100 },
];


// Enter callback hell and the dreaded seagulls!!
//

// function getCustomerRecordsReturn(callback) {
//     console.log("getCustomerRecordsReturn");
//     callback();
// }

// function getCustomerRecordsStart(callback) {
//     console.log("getCustomerRecordsStart");
//     setTimeout(() => getCustomerRecordsReturn(callback), 1500)
// }

// getCustomerRecordsStart(x => { console.log("I've got the records", x) });



// Promises approach
//
const customerPromiseFactory = () => new Promise(function(resolve, reject) {
    // We certainly don't need to use setTimeout, we could add a call to an outbound service.
    // .. what matters is that the resolve and reject methods are pass to that proxy, whatever, etc.
    // .. thereby delegating reporting of outcomes to it - what better knows its internal state?
    //
    setTimeout(() => { 
        const decision = Math.random();
        console.log(decision);

        if (decision > 0.3) { 
            resolve(records);
        } else {
            reject("Failure to access database!");
        }
    },
    1000);
});

// customerPromiseFactory()
//     .then(result => {  
//         console.log(records)
//         return customerPromiseFactory();
//     })
//     .then(result => { 
//         console.log("More records!", records);
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Whatever the case, The End!")
//     })



// Enough of those Promises!
//
async function customerAsync() {    
    try {
        let response1 = await customerPromiseFactory();
        console.log(response1);

        let response2 = await customerPromiseFactory();
        console.log("More data!", response2);
    } catch (error) {
        console.log("Ohnoes!", error)
    }
}

customerAsync();

