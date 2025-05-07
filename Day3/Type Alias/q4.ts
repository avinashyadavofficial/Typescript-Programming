// Combine multiple type aliases using intersection (&)?
type A={
    name:string
}
type B={
    age:number
}
let obj: A&B={
   name:"Avinash",
   age:21
}
console.log(obj.name);//Avinash
console.log(obj);//{ name: 'Avinash', age: 21 }

//Another way
type C=A&{
   age:number 
}
let obj2:C={
    name:"Avinash",
    age:21
}
console.log(obj2.name);//Avinash
console.log(obj2);//{ name: 'Avinash', age: 21 }

type D=A&B;

let obj3:D={
     name:"Avinash",
     age:21
 }
 console.log(obj3.name);//Avinash
 console.log(obj3);//{ name: 'Avinash', age: 21 }