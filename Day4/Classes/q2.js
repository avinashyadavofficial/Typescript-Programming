var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Extend a class User into Admin and add extra properties/methods
// What to do:
// You already have a User class with properties like name and age.
// Now, create a new class Admin that extends User.
// Add at least one new property, such as role or permissions.
// Add a method like getRole() or listPermissions() in the Admin class.
// Create an instance of Admin and call both introduce() from User and the new method from Admin.
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
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, role) {
        var _this = _super.call(this, name, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return "".concat(this.name, " with age ").concat(this.age, " of role ").concat(this.role);
    };
    return Admin;
}(User));
var obj = new Admin("Avinash", 21, "Student");
console.log(obj.introduce());
console.log(obj.getRole()); //Avinash with age 21 of role Student
