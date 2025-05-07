var stud1 = {
    name: "Avinash",
    age: 21
};
var stud2 = {
    name: "Avi",
    age: 22
};
// function mergeTwoObject(stud1:Student,stud2:Student):unknown{
//     let name=stud1.name+stud2.name;
//     let age=stud1.age+stud2.age;
//     return `the merge name is : ${name} and age is ${age}`;  //the merge name is : AvinashAvi and age is 43
// }
//better way
function mergeTwoObject(stud1, stud2) {
    return {
        name: stud1.name + stud2.name,
        age: stud1.age + stud2.age
    };
}
console.log(mergeTwoObject(stud1, stud2)); //the merge name is : AvinashAvi and age is 43
var mergeStud = mergeTwoObject(stud1, stud2);
console.log(mergeStud.name);
