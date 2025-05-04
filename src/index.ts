{
  // @ Type Guard (type narrowing) method

  // * typeof
  type Alphanumeric = string | number;

  function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

  // * in
  interface User {
    name: string;
  }

  interface Admin extends User {
    role: "admin";
  }

  function getSalesApi(user: User | Admin): string {
    if ("role" in user) {
      return "Hello " + user.role + " " + user.name + ". Here is your API";
    } else {
      return "Your are not authorized to see sales data!";
    }
  }

  const rifat: User = {
    name: "rifat",
  };

  const adminRifat: Admin = {
    name: "rifat",
    role: "admin",
  };
}
