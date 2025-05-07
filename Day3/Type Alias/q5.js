var obj = {
    companyName: "GE Vernova",
    ceo: {
        name: "Avinash",
        age: 21,
        address: {
            city: "Chennai"
        }
    }
};
console.log(obj); //{ companyName: 'GE Vernova', ceo: { name: 'Avinash', age: 21 } }
console.log(obj.ceo.age); //21
console.log(obj.ceo.address.city); //Chennai
