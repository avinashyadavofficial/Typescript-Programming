// Extend a class User into Admin and add extra properties/methods
// What to do:
// You already have a User class with properties like name and age.
// Now, create a new class Admin that extends User.
// Add at least one new property, such as role or permissions.
// Add a method like getRole() or listPermissions() in the Admin class.
// Create an instance of Admin and call both introduce() from User and the new method from Admin.
class User{
    protected name:string;
    protected age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    public introduce(){
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }
}
class Admin extends User{
    private role:string;
    constructor(name:string,age:number,role:string){
        super(name,age);
        this.role=role;
    }
    public getRole(){
        return `${this.name} with age ${this.age} of role ${this.role}`;
    }
} 
const obj=new Admin("Avinash",21,"Student");
console.log(obj.introduce());//Hi, I'm Avinash and I'm 21 years old.
console.log(obj.getRole());//Avinash with age 21 of role Student