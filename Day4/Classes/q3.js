// Static Methods and Properties
var Student = /** @class */ (function () {
    function Student(studentName) {
        Student.studentName = studentName;
    }
    Student.getName = function () {
        return "the name is ".concat(this.studentName);
    };
    return Student;
}());
var obj = new Student("Avinash");
console.log(Student.studentName); // Avinash
console.log(Student.getName()); // the name is Avinash
