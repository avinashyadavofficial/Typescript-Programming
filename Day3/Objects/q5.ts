//Write a function that merges two objects of the same type.
type Student={
    name:string,
    age:number
}
const stud1:Student={
    name:"Avinash",
    age:21
}
const stud2:Student={
    name:"Avi",
    age:22
}
// function mergeTwoObject(stud1:Student,stud2:Student):unknown{
//     let name=stud1.name+stud2.name;
//     let age=stud1.age+stud2.age;
//     return `the merge name is : ${name} and age is ${age}`;  //the merge name is : AvinashAvi and age is 43
// }

//better way
function mergeTwoObject(stud1:Student,stud2:Student):Student{
    return{
        name:stud1.name+stud2.name,
        age:stud1.age+stud2.age
    }
}
console.log(mergeTwoObject(stud1,stud2));//the merge name is : AvinashAvi and age is 43
let mergeStud=mergeTwoObject(stud1,stud2);
console.log(mergeStud.name);//AvinashAvi
