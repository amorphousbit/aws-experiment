
// Object notation? [TODO]
let props = {
    name: "Object Be Object",
    title: "A Name By Any Other Name",
    description: "TEST TEST",
    method: (x) => x + 3,
}

console.log(Object.keys(props));



// Using prototype-based inheritance aka don't do it, you don't know it, leave it alone
//
function Animal(name) {
  this.name = name;
  this.energy = 100;
}

Animal.prototype.eat = function() {
  this.energy += 10;
};

Animal.prototype.sleep = function() {
  this.energy += 20;
};

const dog = new Animal('Buddy');
dog.breed = 'Golden Retriever';

console.log('Object.keys():');
Object.keys(dog).forEach(key => {
  console.log(key);  // 'name', 'energy', 'breed'
});

console.log('\nfor...in loop:');
for (let key in dog) {
  console.log(key);  // 'name', 'energy', 'breed', 'eat', 'sleep'
}

console.log('\nfor...in with hasOwnProperty:');
for (let key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key);  // 'name', 'energy', 'breed'
  }
}


class MyClass {
  #private = 42;  // Truly private, not just convention
  
  getPrivate() {
    return this.#private;
  }
}


