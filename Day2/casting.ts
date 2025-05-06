//Casting is the process of overriding a type.
//Casting with as
let a: unknown="hello";
//console.log(a.length);// Property 'length' does not exist on type 'unknown'.
//Now doing Casting with as
console.log((a as String).length);//5

let x:unknown=5;
console.log((x as String).length); //Undefined----> as since numbers don't have a length

//console.log((5 as String).length);//error


//let y:number=5;
//console.log(( y as String).length); //error

//CASTING WITH <>
let z: unknown="hello";
console.log((<string>z).length);//5

//Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let b="hello";
console.log(((b as unknown) as number).length);//error --> Property 'length' does not exist on type 'number'.

