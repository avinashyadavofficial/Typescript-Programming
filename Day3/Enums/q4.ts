// Loop through an enum to display all keys.

// Define an enum — e.g., Days with values like:
// Monday, Tuesday, Wednesday, etc.
// Loop through the enum using a for...in loop or Object.keys() / Object.values().
// Log each key and its corresponding value.

enum Days{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
for(let key in Days){
    if(isNaN(Number(key)))
    console.log(`[${key}] : ${Days[key]}`);
}

