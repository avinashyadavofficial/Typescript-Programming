// Create a class with a constructor and default values.
class Student{
    public name:string;
    public age:number;
    constructor(name:string="Avinash",age:number=21){
        this.name=name;
        this.age=age;
    }
}
const obj=new Student("Avi");
console.log(obj);//Student { name: 'Avi', age: 21 }