// Write a function that takes an unknown input and narrows it to string or number.
function solution(input:unknown):string|number{
    if(typeof input==="number"){
        return `${input} is a number`;
    }
    else if(typeof input==="string"){
        return `${input} is a string`;
    }
    else{
        throw new Error("Wrong input");
    }
}
console.log(solution(12));//12 is a number
console.log(solution("Avi"));//Avi is a string
console.log(solution(true));//throw new Error....