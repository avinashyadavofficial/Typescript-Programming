//Function
function identity(value) {
    return value;
}
var num = identity(42); // T is number
var str = identity("hello"); // T is string
console.log(num); //42
console.log(str); //hello
function pair(v1, v2) {
    return [v1, v2];
}
console.log(pair("hello", 21)); //[ 'hello', 21 ]
//CLASSES
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
var person1 = new Person("Avinash");
console.log(person1.getName()); // Avinash
var person2 = new Person(21);
console.log(person2.getName()); // 21
var person3 = new Person({ first: "Avinash", last: "Yadav" });
console.log(person3.getName()); // { first: 'Avinash', last: 'Yadav' }
// const person4=new Person<string,string>("Avinash","Yadav")
//cant define like this for that we have to define function as
//class Person<FirstNameType, LastNameType> {
