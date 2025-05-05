// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
var Direction;
(function (Direction) {
    Direction[Direction["a"] = 0] = "a";
    Direction[Direction["b"] = 1] = "b";
    Direction[Direction["c"] = 2] = "c";
    Direction[Direction["d"] = 3] = "d";
})(Direction || (Direction = {}));
console.log(Direction.a); //0
console.log(Direction.b); //1
console.log(Direction.c); //2
console.log(Direction.d); //3
//Direction.a=4;//Cannot assign to 'a' because it is a read-only property.
var A;
(function (A) {
    A[A["a"] = 5] = "a";
    A[A["b"] = 6] = "b";
    A[A["c"] = 7] = "c";
    A[A["d"] = 8] = "d";
})(A || (A = {}));
console.log(A.a); //5
console.log(A.b); //6
console.log(A.c); //7
console.log(A.d); //8
var B;
(function (B) {
    B[B["a"] = 100] = "a";
    B[B["b"] = 600] = "b";
})(B || (B = {}));
console.log(B.a); //100
console.log(B.b); //600
//String enums
var C;
(function (C) {
    C["North"] = "North";
    C["South"] = "South";
    C["East"] = "East";
    C[C["West"] = void 0] = "West";
})(C || (C = {}));
console.log(C.North); //North
console.log(C.South); //South
console.log(C.East); //East
console.log(C.West); //West
