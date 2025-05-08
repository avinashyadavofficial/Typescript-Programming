// Create a function with default and optional parameters
function greet(name:string,greeting:string="Hello"){
    return `${greeting} ${name}`;
}
console.log(greet("Avinash","Hi"));//Hi Avinash
console.log(greet("Avinash"));//Hello Avinash
