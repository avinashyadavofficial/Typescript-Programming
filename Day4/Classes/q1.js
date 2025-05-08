// Create a class User with properties and a method introduce
// What to do:
// Define a class User with at least two properties like name and age.
// Add a method introduce() that logs or returns a string like:
// "Hi, I'm John and I'm 25 years old."
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old.");
    };
    return User;
}());
var obj = new User("Avinash", 21);
console.log(obj.introduce());
