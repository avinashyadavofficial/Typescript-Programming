// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type StudentName=string;
type StudentAge=number;
type Student={
    name:StudentName,
    age:StudentAge
}

const studname:StudentName="Avinash";
const studage:StudentAge=21;
const stud:Student={
    name:studname,
    age:studage
};
console.log(stud);
console.log(studname);
console.log(studage);

//example 2
type CarName=string;
type CarYear=number;
type Car={
    name:CarName,
    year:CarYear
}

const cname:CarName="Fortuner";
const cyear:CarYear=2025;
const caaa:Car={
    name:cname,
    year:cyear
}
// console.log(Car); // Car refers to a type but being used as a value here
console.log(caaa);
