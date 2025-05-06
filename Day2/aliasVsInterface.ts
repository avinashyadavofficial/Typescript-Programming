// 1. Syntax and Use
//interface
interface Person {
    name: string;
    age: number;
}
//alias
type Person1 = {
    name: string;
    age: number;
};


//2. Extension & Merging
// Interface
// Can be extended with extends.
// Can be merged (declarations of the same name are combined).
interface Animal {
    name: string;
}
interface Animal {
    age: number;
}
// Now Animal has both name and age

//Type Alias
// Can be extended using intersections (&), but cannot merge declarations.
type Animal1 = {
    name: string;
  };
  
  type AnimalAge = Animal1 & {
    age: number;
  };
  
//Flexibility
//Type Alias Can represent anything, not just object types.
type ID = string | number;
type Callback = () => void;

//Interface can descrive object and classes


// Rule of Thumb
// Use interface when designing the shape of objects, especially for public APIs or OOP-style code.
// Use type when:
// You need union or intersection types
// You’re working with primitives or tuples
// You need more flexible compositions

