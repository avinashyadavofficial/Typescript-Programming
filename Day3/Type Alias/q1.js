var car = {
    brand: "Tata",
    model: "A12",
    year: 2025
};
function CarDetails(car) {
    console.log("the brand is ".concat(car.brand, " and model is ").concat(car.model, " and year is ").concat(car.year));
}
CarDetails(car); //the brand is Tata and model is A12 and year is 2025
