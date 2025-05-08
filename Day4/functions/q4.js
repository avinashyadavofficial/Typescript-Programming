// Create a higher-order function that accepts another function as argument
function fn(a, b) {
    return a + b;
}
function sol(a, b, fn) {
    return a + b + fn(x, y);
}
console.log(sol(3, 4, fn(2, 3)));
