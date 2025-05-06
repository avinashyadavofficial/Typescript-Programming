function getTime() {
    return new Date().getTime();
}
console.log(getTime()); //1746447219048
function print() {
    console.log('Hello'); //Hello
}
print();
function mul(a, b) {
    return a * b;
}
console.log(mul(2, 5)); //10
function mult(a, b) {
    return (a * b).toString();
}
console.log(mult(2, 5) + "Avi"); //10Avi 
//Optional Parameter
function multi(a, b, c) {
    return a * b * (c || 1);
}
console.log(multi(5, 6)); //30
// If no parameter type is defined, TypeScript will default to using any, unless additional type information 
// is available as shown in the Default Parameters and Type Alias sections below.
//Default Parameters
//For parameters with default values, the default value goes after the type annotation:
function pow(val, exponent) {
    if (exponent === void 0) { exponent = 8; }
    return Math.pow(val, exponent);
}
console.log(pow(2)); //256
console.log(pow(2, 5)); //32
//Named Parameters
//Typing named parameters follows the same pattern as typing normal parameters.
function sum(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
console.log(sum({ a: 2, b: 6 })); //8
function ss(_a) {
    var a = _a.a, c = _a.c, b = _a.b;
    return a + c + b;
}
var ans = ss({ a: 12, c: 45, b: "Avinash" });
console.log(ans); //57Avinash
var p = function (a, b) { return a + b; };
console.log(p(2, 6)); //8
function add1(_a) {
    var a = _a.a, b = _a.b, rest = _a.rest;
    return a + b + rest.reduce(function (acc, ele) { return acc + ele; }, 0);
}
console.log(add1({ a: 4, b: 6, rest: [3, 4, 9, 10] })); // Output: 36
//Rest parameters
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(a + b + rest.reduce(function (acc, ele) { return acc + ele; }, 0));
}
add(4, 6, 3, 4, 9, 10);
