//Casting is the process of overriding a type.
//Casting with as
var a = "hello";
//console.log(a.length);// Property 'length' does not exist on type 'unknown'.
//Now doing Casting with as
console.log(a.length); //5
var x = 5;
console.log(x.length); //Undefined----> as since numbers don't have a length
//console.log((5 as String).length);//error
//let y:number=5;
//console.log(( y as String).length); //error
//CASTING WITH <>
var z = "hello";
console.log(z.length); //5
//Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
var b = "hello";
console.log(b.length);
