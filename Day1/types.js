//string,number,boolean
var fname = "Avinash";
var age = 12;
var istrue = true;
console.log(fname); //Avinash
console.log(age); //12
console.log(istrue); //true
//Arrays
var scores = [3, 5, 7, 9];
var names = ["Avinash", "Rahul", "Gaurav"];
console.log(scores); //[3,5,7,9]
console.log(names); //[ 'Avinash', 'Rahul', 'Gaurav' ]
//Tuples
// A tuple is an array with fixed length and types.
// You can’t change the order, and each value has a fixed type.
var person = ["Avinash", 21];
console.log(person); //[ 'Avinash', 21 ]
//let person1:[string,number]=[21,"Avi"];//error : Type 'string' is not assignable to type 'number'.
//Union Types
//Means the value can be one of multiple types:
var userId;
userId = 123;
userId = "Avinash";
//userId=true;//error Type 'boolean' is not assignable to type 'string | number'
//Literal Types
//Used to limit values to a fixed set (like enums but simpler).
var theme;
theme = "light"; // 
theme = "dark"; // 
//theme = "blue";   // error:"blue"' is not assignable to type '"light" | "dark"'.
//any vs unknown
var data = 5;
data = "Avinash";
var value = 5;
value = "Avinash";
if (typeof value === "string") {
    console.log(value.toUpperCase()); //AVINASH
}
if (typeof data === "string") {
    console.log(data.toUpperCase()); //AVINASH
}
//Always prefer unknown over any when possible — it enforces type safety.
//readonly
var a = ["Avinash"];
//a.push("Rahul"); //error : property 'push' does not exist on type 'readonly string[]'.
