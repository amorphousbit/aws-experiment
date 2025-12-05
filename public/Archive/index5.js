

// 
//
class Cargo {
    constructor(identifier) {
        this.id = identifier;        
    }
}

class Vehicle {
    
    constructor(id) {
        this.id = id;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;        
    }

    navigate1(x, y, z) {
        console.log("Vehicle Navigate: ", x, y, z);
    }

    operate() {
        console.log("Vehicle: operating")
    }

    declareSelf() {
        console.log(this.id);
    }
}

class Airplane extends Vehicle {    
    #cargo;

    constructor(id) {
        super(id);
        this.id = "modified: " + this.id;
        this.#cargo = [];
    }

    navigate1() {
        // Spread literal definition
        //
        super.navigate1(...arguments);
    }

    navigate2(lat, lng) {
        console.log("Navigate: ", lat, lng);
    }

    operate() {
        // Example of access super class method
        super.operate();
        //console.log("Airplane: operating")
    }

    addCargo(cargo) {
        this.#cargo.push(cargo);
    }

    declareCargo() {
        this.#cargo
            .filter(x => x instanceof  Cargo)
            .forEach(item => {
            console.log(item, typeof item);
        });
    }
}

let airplaneInst = new Airplane("N9JV57");
airplaneInst.addCargo(new Cargo("EGYP-3322"));
airplaneInst.addCargo(new Cargo("EGYP-3323"));
airplaneInst.addCargo(new Cargo("EGYP-3324"));

airplaneInst.declareSelf();
airplaneInst.declareCargo();
airplaneInst.operate();
airplaneInst.navigate1(100, 200, 300);
airplaneInst.navigate2(222, 333);



// // class is a function
// console.log("\n" + typeof Airplane); // function
// // ...or, more precisely, the constructor method
// console.log("Is an Airplane?", airplaneInst instanceof Airplane);
// console.log("Is a Vehicle?", airplaneInst instanceof Vehicle);
// // This reveals the internal-to-JS architecture, how class types relate to prototype
// console.log(Airplane === Airplane.prototype.constructor); // true
// // This is the maximum depth of my interest in 
// Object.getOwnPropertyNames(Airplane.prototype).forEach(x => console.log(x));
// Object.keys(Airplane.prototype).forEach(x => console.log(x));


// The great spread operator!
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4]

console.log("mergedArray", mergedArray);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

console.log("mergedObject", mergedObject);

