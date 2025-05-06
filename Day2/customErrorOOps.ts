class LoginError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "LoginError";
      Object.setPrototypeOf(this,LoginError.prototype);
    }
  }
  
  function validateLogin(username: string, password: string): void {
    if (!username || !password) {
      throw new LoginError("Missing credentials!");
    }
    console.log("Logged in!");
  }
  
  try {
    validateLogin("avinash", ""); // missing password
  } catch (err: unknown) {
    if (err instanceof LoginError) {
      console.log("Custom Login Error:", err.message);
    } else {
      console.log("Some other error");
    }
  }
//Custom Login Error: Missing credentials!
  