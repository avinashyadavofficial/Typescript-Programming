var user = {
    fullname: "Avinash Yadav",
    age: 21
};
console.log(user); //{ fullname: 'Avinash Yadav', age: 21 }
//user.age+="avi";//Error : Type 'string' is not assignable to type 'number'.
//optional property
var user1 = {
    fullname: "Avinash Yadav"
};
console.log(user1); //{ fullname: 'Avinash Yadav' }
//without optional property
// const user2:{fullname:string,age:number}={ //error
//      fullname:"Avinash Yadav"
// };
// console.log(user2);
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap.Jack);
