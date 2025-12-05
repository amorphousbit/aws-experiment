
// A distillation of the sane way to navigate usage of the "this" keyword in the context of objects
// 
const objectFactory = function() {
    const self = {};
    
    self.propA = 123;
    self.propB = 456;
    self.propD = function() {
        console.log("propD", self);
        return self.propA;
    };

    self.propE = () => {
        console.log("propE", self)
        return self.propB;        
    };

    return self;
};

const instance1 = objectFactory();
console.log(instance1.propD());
console.log(instance1.propE());




// "this" points to the enclosing lexical scope inside functions *and* arrow functions
//
this.windowScope = "WINDOW";

const testFunction = function() {
    console.log("testFunction", this.windowScope);
}
testFunction();


const testArrowFunction = () => {
    console.log("testArrowFunction", this.windowScope);
}
testArrowFunction();


