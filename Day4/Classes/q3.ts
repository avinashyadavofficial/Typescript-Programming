// Static Methods and Properties
class Student {
    public static studentName: string;

    constructor(studentName: string) {
        Student.studentName = studentName;
    }

    public static getName() {
        return `the name is ${this.studentName}`;
    }
}

const obj = new Student("Avinash");
console.log(Student.studentName); // Avinash
console.log(Student.getName());   // the name is Avinash
