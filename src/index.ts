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
