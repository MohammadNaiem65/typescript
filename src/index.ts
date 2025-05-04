// Task 1: Write a TypeScript program that outputs a welcome message.
{
  function greet() {
    console.log(
      "Hello World, I will complete this course successfully and become a Next level Web Developer!"
    );
  }

  // greet();
}

// Task 2: Create a function with parameters and an optional literal type.
// 1. Define a function that takes:
// - name (string)
// - age (number)
// - role (optional, with type 'admin' | 'user' | 'guest')
// 2. The function should log these values or perform a basic action.
{
  type Roles = "admin" | "user" | "guest";

  type User = {
    name: string;
    age: number;
    role?: Roles;
  };

  function createUser(name: string, age: number, role?: Roles): User {
    const user: User = {
      name,
      age,
    };

    if (role) {
      user.role = role;
    }

    return user;
  }

  const user = createUser("John", 21, "admin");
  // console.log("🚀 ~ user:", user);
}

// Task 3: Define a structured Person object using Type Aliases.
// Instructions:
// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
{
  type Person = {
    name: string;
    address: string;
    hairColor: "black" | "brown";
    eyeColor: "black" | "brown";
    income?: number;
    expense: number;
    hobbies: string[];
    familyMembers?: Person[];
    job?: string;
    skills?: string[];
    maritalStatus: boolean;
    friends?: Person[];
  };

  const person1: Person = {
    name: "naiem",
    address: "dhk",
    hairColor: "black",
    eyeColor: "brown",
    income: 10000,
    expense: 22000,
    hobbies: ["gardening", "coding"],
    job: "frontend dev",
    maritalStatus: true,
  };
  // console.log("🚀 ~ person1:", person1);

  const person2: Person = {
    name: "fardin",
    address: "dhk",
    hairColor: "black",
    eyeColor: "black",
    income: 0,
    expense: 5000,
    hobbies: ["sleeping"],
    maritalStatus: false,
    familyMembers: [person1],
  };
  // console.log("🚀 ~ person2:", person2);
}
