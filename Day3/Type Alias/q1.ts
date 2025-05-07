// Create a type alias Car and use it in a function to print car details.
type Car={
    brand:string,
    model:string,
    year:number
}
const car:Car={
    brand:"Tata",
    model:"A12",
    year:2025
}
function CarDetails(car:Car){
    console.log(`the brand is ${car.brand} and model is ${car.model} and year is ${car.year}`);
}
CarDetails(car);//the brand is Tata and model is A12 and year is 2025
