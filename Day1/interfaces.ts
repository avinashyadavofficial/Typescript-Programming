//Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle{ //this refers as type
    height:number,
    width:number

}
const rect:Rectangle={
    height:20,
    width:30
}
console.log(rect);//{ height: 20, width: 30 }

interface ColorRec extends Rectangle{
    color:string
}

const a: ColorRec={
    height:10,
    width:20,
    color:"red"
};
console.log(a);//{ height: 10, width: 20, color: 'red' }