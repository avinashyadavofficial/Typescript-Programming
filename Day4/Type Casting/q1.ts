// Cast a string to number using as
// Use TypeScript's type assertion to convert a value (e.g., a string) to a number using the as keyword.
let str = "123";
let num = str as unknown as number; // usually involves 'unknown' first
console.log(num+2);//1232

// so we can do as
let num1=Number(str);
console.log(num1+2);//125

if(typeof str==="string"){
    let num=parseInt(str);
    console.log(num+2);//125
}
