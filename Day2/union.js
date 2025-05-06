// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number
function sol(a) {
    console.log("the output is ".concat(a));
}
sol(12); //the output is 12
sol("Avinash"); //the output is Avinash
function solution(b) {
    console.log(b);
}
solution(true); //true
solution("Avinash"); //Avinash
solution(21); //21
function sss(b) {
    console.log(b.toUpperCase());
}
sss("Avinash");
