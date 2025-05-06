// When a class extends another class, it can replace the members of the parent class with the same name.
interface Shape{
    getArea():number;
}
class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){}
    public getArea():number{
        return this.width*this.height;
    }
    public toString():string{
        return `Rectangle area: ${this.width*this.height}`;
    }
}
class Square extends Rectangle{
    public constructor(protected width:number){
        super(width,width);
    }
    //here even if u dont write override its working properly
    //By default the override keyword is optional when overriding a method, and only helps to prevent 
    // accidentally overriding a method that does not exist.
    public override toString():string{
        return `Square area: ${this.width*this.width}`;
    }
}
const sqr=new Square(3);
console.log(sqr.toString());//Square area: 9
console.log(sqr.getArea());//9