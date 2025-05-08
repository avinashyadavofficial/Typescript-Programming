// Create a function with default and optional parameters
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, " ").concat(name);
}
console.log(greet("Avinash", "Hi")); //Hi Avinash
console.log(greet("Avinash")); //Hello Avinash
