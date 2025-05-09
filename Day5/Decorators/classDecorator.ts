function A(constructor:Function){
    console.log("Class B is going to be called , ",constructor.name);
}
@A
class B{
   constructor(){
    console.log("Hello class B called");
   }
}
const obj=new B();
//Class B is going to be called , B
//Hello class B called