
// More on JavaScript OOP

class NeoAnimal {
    #name = 'animal';

    static #registry = [];

    static registry() {
        return NeoAnimal.#registry;
    }

    announce() {
        console.log("Annoucing Animal: " + this.#name);
    }

    set name(value) {
        this.#name = value;
    }

    get name() {
        return this.#name;
    }

    constructor() {
        console.log("Animal ctor invoked", this.name); // (*)
        NeoAnimal.#registry.push(this);
        this.announce();
    }
}

// class NeoRabbit extends NeoAnimal {
//     announce() {
//         console.log("Annoucing Neo Rabbit: " + this.name);
//     }
// }



var animal1 = new NeoAnimal();
var animal2 = new NeoAnimal();

console.log(NeoAnimal.registry())

