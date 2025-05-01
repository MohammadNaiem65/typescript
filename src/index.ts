// Creating same type of objects normally

const person1: { name: string; age: number } = {
    name: 'John',
    age: 30,
};

const person2: { name: string; age: number } = {
    name: 'John',
    age: 30,
};

// Creating same type of objects using type alias
type Person = {
    name: string;
    age: number;
};

const person3: Person = {
    name: 'John',
    age: 30,
};

const person4: Person = {
    name: 'John',
    age: 30,
};

// String type alias and it can be used as type of anything afterwards
type Username = string;

type Student = {
    name: Username;
    age: number;
};

// Type alias for function
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

console.log(add(1, 2));
