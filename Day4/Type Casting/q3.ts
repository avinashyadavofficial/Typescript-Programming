// Create a generic function and cast a return value
// Create a generic function that returns a value cast to a specific type using <T>.
function solution<T>(val:T):T{
    return val as T;
}
console.log(solution<string>("Avi")+" Yadav");//Avi Yadav