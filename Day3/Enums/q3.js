// Create an enum with numeric values and one with string values.
var Numeric;
(function (Numeric) {
    Numeric[Numeric["a"] = 0] = "a";
    Numeric[Numeric["b"] = 1] = "b";
})(Numeric || (Numeric = {}));
console.log(Numeric.a); //0
console.log(Numeric[0]); //a
console.log(Numeric.b); //1
var Stringggg;
(function (Stringggg) {
    Stringggg["a"] = "a";
    Stringggg["b"] = "bbb";
})(Stringggg || (Stringggg = {}));
console.log(Stringggg.a); //a
console.log(Stringggg.b); //bbb
console.log(Stringggg["bbb"]); //undefined
