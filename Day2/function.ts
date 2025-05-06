function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());//1746447219048

function print():void{
    console.log('Hello');//Hello
}
print();

function mul(a:number,b:number):number{
    return a*b;
}
console.log(mul(2,5));//10

function mult(a:number,b:number):string{
    return (a*b).toString();
}
console.log(mult(2,5) +"Avi");//10Avi 

//Optional Parameter
function multi(a:number,b:number, c?:number){
    return a*b*(c||1);
}
console.log(multi(5,6));//30

// If no parameter type is defined, TypeScript will default to using any, unless additional type information 
// is available as shown in the Default Parameters and Type Alias sections below.


//Default Parameters
//For parameters with default values, the default value goes after the type annotation:
function pow(val:number,exponent:number=8){
    return val**exponent;
}
console.log(pow(2));//256
console.log(pow(2,5));//32

//Named Parameters
//Typing named parameters follows the same pattern as typing normal parameters.
function sum({a, b}: {a: number, b: number}): number {
    return a + b;
}

console.log(sum({a: 2, b: 6}));  //8

function ss({a,c,b}:{a:number,c:number,b:string}){
    return a+c+b;
}
let ans=ss({a:12,c:45,b:"Avinash"});
console.log(ans);//57Avinash

//Alias In FUNCTION
//Function types can be specified separately from functions with type ali
type Sum=(a:number,b:number)=>number;
const p:Sum=(a,b)=>a+b;
console.log(p(2,6));//8


function add1({ a, b, rest }: { a: number; b: number; rest: number[] }): number {
    return a + b + rest.reduce((acc, ele) => acc + ele, 0);
}

console.log(add1({ a: 4, b: 6, rest: [3, 4, 9, 10] })); // Output: 36

//Rest parameters
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a:number,b:number,...rest:number[]){
    console.log(a+b+rest.reduce((acc,ele)=>acc+ele,0));
}
add(4,6,3,4,9,10);


  





