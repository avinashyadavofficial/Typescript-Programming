// Create a class with a constructor and default values.
var Student = /** @class */ (function () {
    function Student(name, age) {
        if (name === void 0) { name = "Avinash"; }
        if (age === void 0) { age = 21; }
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var obj = new Student("Avi");
console.log(obj);
