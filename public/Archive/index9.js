
// Fun with recursion

let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


const reverseIt = function(input) {
    // Doing this to avoid mutating the original input - yes I know the memory footprint stinks
    //
    var copy = [... input];
    
    // Pull the first element off
    //
    var first = copy.shift();
    
    console.log("first element:", first, "copy", copy);
    return first ? [ ...reverseIt(copy), first ] : [];
}

const experiment = reverseIt(array);

console.log(experiment);

