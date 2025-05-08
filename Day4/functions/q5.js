// Write a function that returns another function with closure over a variable
// A factory function: function makeCounter() { let count = 0; return () => ++count; }
function makeCounter() {
    var count = 0;
    return function () {
        return ++count;
    };
}
var counter = makeCounter();
console.log(makeCounter); //[Function: makeCounter]
console.log(counter()); //1
console.log(counter()); //2
