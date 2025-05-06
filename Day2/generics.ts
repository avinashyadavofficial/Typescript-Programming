//Function
function identity<T>(value: T): T {
    return value;
}
let num = identity<number>(42);      // T is number
let str = identity<string>("hello"); // T is string
console.log(num);//42
console.log(str);//hello

function pair<S,T>(v1:S,v2:T):[S,T]{
        return [v1,v2];
}
console.log(pair<string,number>("hello",21));//[ 'hello', 21 ]

//CLASSES
class Person<T> {
    private name: T;
  
    public constructor(name: T) {
      this.name = name;
    }
  
    public getName(): T {
      return this.name;
    }
  
    public setName(newName: T): void {
      this.name = newName;
    }
}
const person1 = new Person<string>("Avinash");
console.log(person1.getName()); // Avinash

const person2 = new Person<number>(21);
console.log(person2.getName()); // 21

const person3 = new Person<{ first: string, last: string }>({ first: "Avinash", last: "Yadav" });
console.log(person3.getName()); // { first: 'Avinash', last: 'Yadav' }

// const person4=new Person<string,string>("Avinash","Yadav")
//cant define like this for that we have to define function as
//class Person<FirstNameType, LastNameType> {



  