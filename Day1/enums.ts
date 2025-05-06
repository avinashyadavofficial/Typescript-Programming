// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

enum Direction{
    a,
    b,
    c,
    d
}
let x:Direction=Direction.b;
console.log(x);//1
console.log(Direction.a);//0
console.log(Direction.b);//1
console.log(Direction.c);//2
console.log(Direction.d);//3

//Direction.a=4;//Cannot assign to 'a' because it is a read-only property.

enum A{
    a=5,
    b,
    c,
    d
}
console.log(A.a);//5
console.log(A.b);//6
console.log(A.c);//7
console.log(A.d);//8

enum B{
    a=100,
    b=600
}
console.log(B.a);//100
console.log(B.b);//600


//String enums
enum C{
    North="North",
    South="South",
    East="East",
    West="West"
}
console.log(C.North);//North
console.log(C.South);//South
console.log(C.East);//East
console.log(C.West);//West
