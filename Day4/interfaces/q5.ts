// Use optional and readonly in interface properties
// Task: Use readonly for immutable properties and ? for optional properties in an interface.
interface Student{
    readonly name:string,
    age?:number
}
class A implements Student{
    readonly name:string;//must be readonly here too
    constructor(name:string){
        this.name=name;
    } 
    // setName(newName:string){
    //     this.name=newName; //Cannot assign to 'name' because it is a read-only property.
    // }   
}
const obj=new A("Avinash");
// obj.setName("BBB");
console.log(obj);//A { name: 'Avinash' }
