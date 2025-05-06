// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number
function sol(a:string | number){
    console.log(`the output is ${a}`);
}
sol(12);//the output is 12
sol("Avinash");//the output is Avinash

function solution(b:string |number| boolean){
    console.log(b); 
}
solution(true);//true
solution("Avinash");//Avinash
solution(21);//21

// function sss(b:string|number){
//     console.log(b.toUpperCase()); //Error : Property 'toUpperCase' does not exist on type 'number'.
// }
// sss("Avinash");

