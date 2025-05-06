// let user: { name: string } | null = {name:"Avinash"};
let user: { name: string } | null = null;
try {
    console.log(user.name); 
} catch (err: unknown) {
    if(err instanceof Error){
    console.log( "Error caught:", err.message);
    }
} finally {
    console.log("Always runs");
}
//Output:
// Error caught: Cannot read properties of null (reading 'name')
// Always runs

//Example2
function riskyOperation(): void {
    let user: { name: string } | null = null;
  
    try {
      if (user !== null) {
        console.log(user.name); 
      } else {
        throw new Error("User is null");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log("Error caught:", err.message); 
      } else {
        console.log("Unknown error:", err);
      }
    } finally {
      console.log("Always runs");
    }
  }
  
  riskyOperation();
//Output
// Error caught: User is null
// Always runs
  