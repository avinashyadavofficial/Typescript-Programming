// Create a higher-order function that accepts another function as argument
function fn(a:number,b:number):number{
    return a+b;
}
function sol(a:number,b:number,fn:(x:number,y:number)=>number):number{
    return a+b+fn(x,y);
}
console.log(sol(3,4,fn));
