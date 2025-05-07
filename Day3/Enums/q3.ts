// Create an enum with numeric values and one with string values.
enum Numeric{
    a,
    b
}
console.log(Numeric.a);//0

console.log(Numeric[0]); //a

console.log(Numeric.b);//1
enum Stringggg{
    a="a",
    b="bbb"
}
console.log(Stringggg.a);//a
console.log(Stringggg.b);//bbb
console.log(Stringggg["bbb"]);//undefined