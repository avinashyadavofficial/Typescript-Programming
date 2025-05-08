var A = /** @class */ (function () {
    function A(name, age) {
        this.name = name;
        this.age = age;
    }
    A.prototype.print = function () {
        console.log(this.name);
        console.log(this.age);
    };
    return A;
}());
var obj = new A("Avinash", 21);
obj.print();
// Output:
// Avinash
// 21
