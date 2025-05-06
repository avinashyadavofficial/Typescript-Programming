// let user: { name: string } | null = {name:"Avinash"};
var user = null;
try {
    console.log(user.name);
}
catch (err) {
    if (err instanceof Error) {
        console.log("Error caught:", err.message);
    }
}
finally {
    console.log("Always runs");
}
//Output:
// Error caught: Cannot read properties of null (reading 'name')
// Always runs
//Example2
function riskyOperation() {
    var user = null;
    try {
        if (user !== null) {
            console.log(user.name);
        }
        else {
            throw new Error("User is null");
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("Error caught:", err.message);
        }
        else {
            console.log("Unknown error:", err);
        }
    }
    finally {
        console.log("Always runs");
    }
}
riskyOperation();
