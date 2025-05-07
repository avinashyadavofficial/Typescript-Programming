// Loop through an enum to display all keys.
// Define an enum — e.g., Days with values like:
// Monday, Tuesday, Wednesday, etc.
// Loop through the enum using a for...in loop or Object.keys() / Object.values().
// Log each key and its corresponding value.
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
for (var key in Days) {
    if (isNaN(Number(key)))
        console.log("[".concat(key, "] : ").concat(Days[key]));
}
