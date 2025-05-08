// Cast a string to number using as
// Use TypeScript's type assertion to convert a value (e.g., a string) to a number using the as keyword.
var str = "123";
var num = str; // usually involves 'unknown' first
console.log(num + 2); //1232
// so we can do as
var num1 = Number(str);
console.log(num1 + 2); //125
if (typeof str === "string") {
    var num_1 = parseInt(str);
    console.log(num_1 + 2);
}
