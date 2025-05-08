//1. Object Shape (Most Common)
interface Person {
    name: string;
    age: number;
}
const person: Person = { name: "Avi", age: 21 };

//2. Function Types
interface Adder {
    (a: number, b: number): number;
}
const add: Adder = (x, y) => x + y;

//3. Index Signatures (Dynamic keys)
interface StringMap {
    [key: string]: string;
}
const colors: StringMap = {
    red: "#FF0000",
    green: "#00FF00"
};

//4. Extending Interfaces
interface Person {
    name: string;
}
interface Employee extends Person {
    salary: number;
}
const emp: Employee = { name: "Avi", salary: 50000 };

//5. Readonly and Optional Properties
interface Student {
    readonly id: number;
    name: string;
    email?: string;
}
//6. Interface for Arrays

interface NumberArray {
    [index: number]: number;
}
const nums: NumberArray = [1, 2, 3];
//7. Hybrid Types (Function + Properties)

interface Counter {
    (): number;
    count: number;
}

function getCounter(): Counter {
    const c = (() => ++c.count) as Counter;
    c.count = 0;
    return c;
}
const counter = getCounter();
console.log(counter()); // 1
console.log(counter.count); // 1
// 8. Callable Interfaces with new (Construct Signatures)

interface ClockConstructor {
    new (hour: number, minute: number): Clock;
}
interface Clock {
    tick(): void;
}

class DigitalClock implements Clock {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}