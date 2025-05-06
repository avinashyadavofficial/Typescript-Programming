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
var Person = /** @class */ (function () {
    function Person(name, data, age) {
        this.name = name;
        this.data = data;
        this.age = age;
    }
    Person.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name)); //Name: Avinash
        console.log("Age: ".concat(this.age)); // Age: 21
        console.log("Data: ".concat(this.data)); // Data: aaababababa
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, data, age, salary) {
        var _this = _super.call(this, name, data, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showEmployeeInfo = function () {
        console.log("Employee: ".concat(this.name)); //  Employee: Avinash
        console.log("Age: ".concat(this.age)); // Age: 21
        // console.log(`data: ${this.data}`);     Error: private in base class
        console.log("Salary: ".concat(this.salary)); // 
    };
    return Employee;
}(Person));
var emp = new Employee("Avinash", "aabababababa", 21, 100000);
emp.showInfo(); // works
emp.showEmployeeInfo(); //  works
console.log(emp.name); //  public
//console.log(emp.age);    // Error: protected ->  Property 'age' is protected and only accessible within class 'Person'
// and its subclasses.
//console.log(emp.data);    // Error: private -> Property 'data' is private and only accessible within class 'Person'.
//console.log(emp.salary); // Error: private -> Property 'salary' is private and only accessible within class 'Employee'.
