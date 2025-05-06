function login(username:string,password:string):void{
    if(!username || !password){
        throw new Error("Username or password is not there");
    }
    console.log("Login Successfull");
}
try {
    login("","12345");
} catch (error:unknown) {
    if(error instanceof Error){
        console.log("Error is :",error.message);
    }
}
finally{
    console.log("Always run");
}

//Output:
// Error is : Username or password is not there
// Always run