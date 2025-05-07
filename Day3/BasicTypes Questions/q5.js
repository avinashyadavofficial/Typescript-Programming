// Combine two numbers or two strings and return the result based on type.
function sol(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.concat(input2);
    }
    else {
        throw new Error("Inputs must be of the same type");
    }
}
console.log(sol(2, 3)); //5
console.log(sol("Avi ", "Yadav")); //Avi Yadav
console.log(sol("Avi", 21)); //wrong input
