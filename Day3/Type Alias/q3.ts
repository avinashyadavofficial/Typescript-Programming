// Use a type alias with optional properties?
type Student={
    name:string,
    email?:string
}
const stud:Student={
    name:"Avinash"
}
console.log(stud.email);//undefined
//Correct way
if (stud.email) {
    console.log(`Email is: ${stud.email}`);
} else {
    console.log("Email not provided.");
}
//Email not provided

//Note
// if I dont use optional then it would give error: Property 'email' is missing in type '{ name: string; }' but required in type 'Student'.
