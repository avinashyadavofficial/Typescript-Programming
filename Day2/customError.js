function login(username, password) {
    if (!username || !password) {
        throw new Error("Username or password is not there");
    }
    console.log("Login Successfull");
}
try {
    login("", "12345");
}
catch (error) {
    if (error instanceof Error) {
        console.log("Error is :", error.message);
    }
}
finally {
    console.log("Always run");
}
