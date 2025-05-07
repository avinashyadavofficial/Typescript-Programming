// Define a Color enum and use it to set a background.
//Instructions:
// Define a Color enum with values like Red, Green, Blue.
// Create a variable (e.g., bgColor) of type Color.
// Log or simulate setting a background using the enum (in a string message).
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var bgColor = Color.Red;
console.log("Background color is ".concat(bgColor)); //Background color is red
