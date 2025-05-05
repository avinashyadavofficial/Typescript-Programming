//string,number,boolean
let fname:string="Avinash";
let age:number=12;
let istrue:boolean=true;
console.log(fname); //Avinash
console.log(age);   //12
console.log(istrue); //true

//Arrays
let scores:number[]=[3,5,7,9];
let names:string[]=["Avinash","Rahul","Gaurav"];
console.log(scores);//[3,5,7,9]
console.log(names); //[ 'Avinash', 'Rahul', 'Gaurav' ]

//Tuples
// A tuple is an array with fixed length and types.
// You can’t change the order, and each value has a fixed type.
let person:[string,number]=["Avinash",21];
console.log(person);//[ 'Avinash', 21 ]

//let person1:[string,number]=[21,"Avi"];//error : Type 'string' is not assignable to type 'number'.

//Union Types
//Means the value can be one of multiple types:
let userId:number|string;
userId=123;
userId="Avinash"
//userId=true;//error Type 'boolean' is not assignable to type 'string | number'

//Literal Types
//Used to limit values to a fixed set (like enums but simpler).
let theme: "light" | "dark";
theme = "light";  // 
theme = "dark";   // 
//theme = "blue";   // error:"blue"' is not assignable to type '"light" | "dark"'.

//any vs unknown
let data: any=5;
data="Avinash"
let value:unknown=5;
value="Avinash";
if(typeof value==="string"){
    console.log(value.toUpperCase());//AVINASH
}
if(typeof data==="string"){
    console.log(data.toUpperCase());//AVINASH
}
//Always prefer unknown over any when possible — it enforces type safety.


//readonly
let a:readonly string[]=["Avinash"];
//a.push("Rahul"); //error : property 'push' does not exist on type 'readonly string[]'.




