interface Shape{
    getArea():number;
}
class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){}
    public getArea():number{
        return this.width*this.height;
    }
}
class Square extends Rectangle{
    public constructor(protected width:number){
        super(width,width);
    }
}
const sqr=new Square(3);
console.log(sqr.getArea());//9