// Use optional and readonly properties in an object type?
type User={
    userName:string,
    age?:number,
    arr:readonly number[],
    readonly email:string
}
const user1:User={
    userName:"Avinash",
    arr:[2,4,6,1],
    email:"user1@abc.com"
}
console.log(user1.userName);//Avinash
console.log(user1.age);//undefined
console.log(user1.arr);//[2,4,6,1]
//user1.arr.push(12);//Property 'push' does not exist on type 'readonly number[]'.
//console.log(user1.arr);
console.log(user1.email);//user1@abc.com
//user1.email="aa@abc.com";//Cannot assign to 'email' because it is a read-only property.

