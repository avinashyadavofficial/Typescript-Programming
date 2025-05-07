// Use a type alias for a union of allowed fuel types (e.g., "diesel", "petrol", "electric")?
type FuelType="diesel" | "petrol"| "electric";
function solution(fuel:FuelType):void{
    console.log(`the fuel is ${fuel}`);
}
solution("diesel");//the fuel is diesel
//console.log(solution("gas")); //Argument of type '"gas"' is not assignable to parameter of type 'FuelType'

// function describeFuel(fuel: FuelType): void {
//     switch (fuel) {
//         case "diesel":
//             console.log("You selected diesel, ideal for heavy-duty vehicles.");
//             break;
//         case "petrol":
//             console.log("You selected petrol, common in most cars.");
//             break;
//         case "electric":
//             console.log("You selected electric, eco-friendly choice!");
//             break;
//     }
// }
