interface Shape{
    getArea():number;
}
class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){}
    public getArea():number{
        return this.width*this.height;
    }
}
const rect=new Rectangle(3,6);
console.log(rect.getArea());