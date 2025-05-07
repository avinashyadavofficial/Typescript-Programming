// Explain the difference between any and unknown using a validation example.
// any Type:
// The any type is the most flexible type in TypeScript.
// It allows you to assign any value to a variable and essentially turns off TypeScript's type-checking for that value.
// This can be risky because you lose all type safety, and operations on any types won't be checked at compile time.
// unknown Type:
// The unknown type is similar to any, but safer.
// You can assign any value to a variable of type unknown, but before you can operate on it, you need to narrow the type by checking it with something like typeof or instanceof.
// This makes unknown much safer than any, because it forces you to validate the type before using it.
var input1 = "Avinash";
var ans1 = input1.toUpperCase();
console.log(ans1); //AVINASH
var input2 = "Avinash";
//wrong way--->gives error
//let ans2=input2.toUpperCase();//Property 'toUpperCase' does not exist on type 'unknown'.
//correct way
if (typeof input2 === "string") {
    console.log(input2.toUpperCase());
}
