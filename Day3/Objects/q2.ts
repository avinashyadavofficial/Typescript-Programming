// Write a function that compares two User objects by their email.
type User={
    email:string,
}
let obj1:User={
    email:"obj1@xyz.com"
}
let obj2:User={
    email:"obj2@xyz.com"
}
console.log(obj1.email==obj2.email);//false
console.log(obj1.email===obj2.email);//false

//In function
function compareUsersByEmail(user1: User, user2: User): boolean {
    return user1.email === user2.email;
}
console.log(compareUsersByEmail(obj1, obj2)); // false
