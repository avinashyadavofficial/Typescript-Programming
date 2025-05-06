function SimpleLogger(constructor: Function) {
  console.log("Class is created:", constructor.name);
}
@SimpleLogger
class User {
  constructor(public name: string) {}
}

function Logger(constructor: Function) {
  console.log("Logger is running...");
  console.log("Class name:", constructor.name);
}

@Logger
class Dog {
  constructor() {
    console.log("Dog constructor called.");
  }
}

console.log("Before creating the object...");
const d = new Dog();
