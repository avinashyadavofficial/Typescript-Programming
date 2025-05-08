// Create a class User with properties and a method introduce
// What to do:
// Define a class User with at least two properties like name and age.
// Add a method introduce() that logs or returns a string like:
// "Hi, I'm John and I'm 25 years old."
class User{
    private name:string;
    private age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    public introduce(){
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }
}
const obj=new User("Avinash",21);
console.log(obj.introduce());