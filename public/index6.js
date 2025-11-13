
let example1 = [1, 2, 3];
let example2 = [4, 5, 6];
let example3 = [...example1, ...example2];
console.log(example3);

let test1 = { name: "You Know It", amount: 123 }

let { name, amount } = test1;

console.log(name, amount);




// More on JavaScript OOP

class Animal {
    name = 'animal';
    announce() {
        console.log("Annoucing Animal: " + this.name);
    }

    constructor() {
        console.log("Animal ctor invoked", this.name); // (*)
        this.announce();
    }
}

console.log("\nAnimal class baseline demo");
let a1 = new Animal();
a1.announce();


// #1 - The absence of constructor override causes the super class constructor to be automatically called
class Rabbit1 extends Animal {
    name = 'rabbit1';
}

console.log("\nRabbit1 - super class automatic constructor invocation");
let a2 = new Rabbit1();
a2.announce();



// #2 - Method overrides are what get invoked by the super class -
// .. even if they weren't able to follow the Liskov Substitution Principle :-D
class Rabbit2 extends Animal {
    name = 'rabbit2';
    constructor() {
        super();    
        console.log("Rabbit2 ctor invoked: " + this.name);
    }
    announce() {
        console.log("Announcing 123 123 Rabbit: " + this.name);
    }
}
console.log("\nRabbit2 - super class invoking subclass override method");
let a3 = new Rabbit2();
a3.announce();



// #3 - Field overrides
class Rabbit3 extends Animal {
    
    // Claude: What's the difference between this:
    name = 'rabbit3';
    constructor() {
        super();

        // Claude: and this vvv
        this.name = 'rabbit3';
        console.log("Rabbit3 ctor invoked: " + this.name);
    }
    
    announce() {
        console.log("Announcing Rabbit 3X: " + this.name + " - and now calling super announce");
        super.announce();
    }
}
console.log("\nRabbit3 - demonstrating field overrides");
let a4 = new Rabbit3();
a4.announce();

