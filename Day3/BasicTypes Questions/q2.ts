// Write a function that calculates the square of a number.
function square(num:number):number{
    return num*num;
}
let square1=(num:number):number=>num*num;

console.log(square(4));//16
console.log(square1);//[Function: square1]
console.log(square1(4));//16

//If you wanted to validate the input to ensure it's a number (in a dynamic environment):
function safeSquare(num:unknown):number|undefined{
    if(typeof num==="number"){
        return num*num;
    }
    return undefined;
}
console.log(safeSquare(4));//16
console.log(safeSquare('Hii'));//undefined
