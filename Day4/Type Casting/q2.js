// Safely cast an unknown input to a string with a runtime check
// Write a function that takes an unknown type input and safely checks if it's a string before using it. 
// If it's not a string, handle the error gracefully.
function sol(input) {
    if (typeof input !== "string") {
        throw new Error("Not a string");
    }
    return input;
}
console.log(sol(122) + 3);
