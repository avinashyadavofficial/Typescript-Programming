// An abstract class is a blueprint for other classes. It can have some code, but it leaves some parts 
// (called abstract methods) unfinished, so other classes must fill in the missing parts. You can’t create objects 
// from it directly.
// Imagine:
// You're a game developer. You’re creating a game with different shapes that can appear on the screen: 
// rectangles, circles, triangles, etc.You know that every shape must have an area, but how to calculate that 
// area is different for each one.So you do this:

// interface Shape {
//     getArea(): number;
//     describe(): string;
// }
// abstract class BaseShape implements Shape { 
//So like above I can Use interfaces tooo like this and then implements in class
abstract class Shape {

    public abstract getArea(): number;
  
    public describe(): string {
      return `The area  = ${this.getArea()}`;
    }
}
class Rectangle extends Shape {
    public constructor(private width: number, private height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect.describe()); //The area = 50
  
  