// @ Encapsulation - Encapsulation is putting data and the functions into a single package (place) that use that data
class Player {
  constructor(
    public name: string,
    protected salary: number,
    public skill: string
  ) {}

  // @ This is Abstraction - (Abstracting is removing complex theories and codings under the hood and offering simple methods to do the same)
  getSalary(): number {
    return this.salary * 12;
  }
}

// @ Inheritance - Taking the properties and methods from the parent class
// * In this example FootballPlayer inherits the name, salary and skill properties
class FootballPlayer extends Player {
  constructor(name: string, salary: number, skill: string) {
    super(name, salary, skill);
  }

  // @ This is Polymorphism - A concept that allows to use the same variable or function to use in different forms
  // * In this case, we are creating a method with the same name of the parent class but serves a different purpose
  getSalary() {
    return this.salary * 6;
  }
}

const tanjimSakib = new Player("Tanjim Sakib", 50000, "all-rounder");
const musfik = new Player("Musfik Ur Rahim", 70000, "bowler-keeper");

console.log(tanjimSakib.getSalary());
console.log(musfik.getSalary());
