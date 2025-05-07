// Create a type alias for a complex object with nested structures?
type Person={
    name:string,
    age:number,
    address:{
        city:string
    }
}
type Company={
    companyName:string,
    ceo:Person
}
const obj:Company={
    companyName:"GE Vernova",
    ceo:{
        name:"Avinash",
        age:21,
        address:{
            city:"Chennai"
        }
    }
}
console.log(obj);//{ companyName: 'GE Vernova', ceo: { name: 'Avinash', age: 21 } }
console.log(obj.ceo.age);//21
console.log(obj.ceo.address.city);//Chennai