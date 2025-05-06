class Person {
    public name: string;           // Anyone can access this
    private data: string;           // Only Person can access
    protected age: number;         // Person and subclasses can access
  
    constructor(name: string, data: string, age: number) {
      this.name = name;
      this.data = data;
      this.age = age;
    }
  
    public showInfo(): void {
      console.log(`Name: ${this.name}`);//Name: Avinash
      console.log(`Age: ${this.age}`);// Age: 21
      console.log(`Data: ${this.data}`); // Data: aaababababa
    }
  }
  
  class Employee extends Person {
    private salary: number;
  
    constructor(name: string, data: string, age: number, salary: number) {
      super(name, data, age);
      this.salary = salary;
    }
  
    public showEmployeeInfo(): void {
      console.log(`Employee: ${this.name}`); //  Employee: Avinash
      console.log(`Age: ${this.age}`);       // Age: 21
      // console.log(`data: ${this.data}`);     Error: private in base class
      console.log(`Salary: ${this.salary}`); // Salary: 100000
    }
  }
  
  const emp = new Employee("Avinash", "aabababababa", 21, 100000);
  emp.showInfo();             // works
  emp.showEmployeeInfo();     //  works
  
  console.log(emp.name);      //  Avinash --public

  //console.log(emp.age);    // Error: protected ->  Property 'age' is protected and only accessible within class 'Person'
                                            // and its subclasses.
  //console.log(emp.data);    // Error: private -> Property 'data' is private and only accessible within class 'Person'.
  //console.log(emp.salary); // Error: private -> Property 'salary' is private and only accessible within class 'Employee'.

//Notes:
Access Modifier	Access from Class	Access from Subclass	Access from Outside
public	           Yes	                Yes	                      Yes
protected	       Yes	                Yes	                      No
private	           Yes	                No	                      No