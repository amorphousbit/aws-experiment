let lexenv = "lexenv: [global]";
console.log(lexenv);

function CounterDecl() {
    let lexenv = "lexenv: CounterDecl";
    let count = 0;

    console.log(this, lexenv);

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let CounterExpr = function() {
    let lexenv = "lexenv: CounterExpr";
    let count = 0;

    console.log(this, this.lexenv);

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counterDecl1 = new CounterDecl();

console.log( counterDecl1.up() ); // ?
console.log( counterDecl1.up() ); // ?
console.log( counterDecl1.down() ); // ?

let counterExpr2 = new CounterExpr();

console.log( counterExpr2.up() ); // ?
console.log( counterExpr2.up() ); // ?
console.log( counterExpr2.down() ); // ?

