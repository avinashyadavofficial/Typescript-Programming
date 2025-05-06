//TypeScript adds types and visibility modifiers to JavaScript classes.
class Person{
    private name:string
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
    public setName(newName: string){
        this.name=newName;
    }
}
const person=new Person("Avinash");
console.log(person.getName());//Avinash
person.setName("Avi");
console.log(person.getName());//Avi

//Second way
class Student{
    public constructor(private name:string){}
    public getName():string{
        return this.name;
    }
    public setName(newName: string){
        this.name=newName;
    }
}
const stud= new Student("Avi");
stud.setName("Gaurav");
console.log(stud.getName());//Gaurav

//Readonly
class Student1{
    public constructor(private readonly name:string){}
    public getName():string{
        return this.name;
    }
    // public setName(newName:string){
    //     this.name=newName; //Cannot assign to 'name' because it is a read-only property.
    // }
}
const stud1= new Student1("Avi");
//stud1.setName("Gaurav");
console.log(stud1.getName());//Avi


class Person1{
    public readonly name:string
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
    // public setName(newName: string){
    //     this.name=newName;//Cannot assign to 'name' because it is a read-only property.
    // }
}
const person1=new Person1("Avinash");
console.log(person1.getName());//Avinash
// person.setName("Avi");

