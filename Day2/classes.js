//TypeScript adds types and visibility modifiers to JavaScript classes.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Person;
}());
var person = new Person("Avinash");
console.log(person.getName()); //Avinash
person.setName("Avi");
console.log(person.getName()); //Avi
//Second way
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Student;
}());
var stud = new Student("Avi");
stud.setName("Gaurav");
console.log(stud.getName()); //Gaurav
//Readonly
var Student1 = /** @class */ (function () {
    function Student1(name) {
        this.name = name;
    }
    Student1.prototype.getName = function () {
        return this.name;
    };
    return Student1;
}());
var stud1 = new Student1("Avi");
//stud1.setName("Gaurav");
console.log(stud1.getName()); //Avi
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Avinash");
console.log(person1.getName()); //Avinash
// person.setName("Avi");
