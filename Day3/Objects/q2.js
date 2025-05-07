var obj1 = {
    email: "obj1@xyz.com"
};
var obj2 = {
    email: "obj2@xyz.com"
};
console.log(obj1.email == obj2.email); //false
console.log(obj1.email === obj2.email); //false
//In function
function compareUsersByEmail(user1, user2) {
    return user1.email === user2.email;
}
console.log(compareUsersByEmail(obj1, obj2)); // false
