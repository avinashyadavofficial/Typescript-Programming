// Write a function that takes an unknown input and narrows it to string or number.
function solution(input) {
    if (typeof input === "number") {
        return "".concat(input, " is a number");
    }
    else if (typeof input === "string") {
        return "".concat(input, " is a string");
    }
    else {
        throw new Error("Wrong input");
    }
}
console.log(solution(12));
console.log(solution("Avi"));
console.log(solution(true));
