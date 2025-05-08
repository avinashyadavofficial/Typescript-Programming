// Implement an interface in a class
// Task: Create an interface and a class. Implement the interface in the class to make sure the class structure 
// matches the interface.
interface Student {
    name: string;
    age: number;
}
//this interface means --> Any object (or class) that claims to be a Student must have a name and age 
// with the correct types
class A implements Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name);
        console.log(this.age);
    }
}

const obj = new A("Avinash", 21);
obj.print();
// Output:
// Avinash
// 21
