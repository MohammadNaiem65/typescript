// @ Class member visibility (public, protected, private), statics and getter, setter accessors

// Family class
class Family {
  static wealth: number = 10000;

  static getWealth() {
    return Family.wealth;
  }

  static inheritWealth(amount: number): string | number {
    if (amount > Family.wealth) {
      return "You can't get more than we have";
    }

    return (Family.wealth -= amount);
  }

  static growWealth(amount: number) {
    return (Family.wealth += amount);
  }
}

// Family member class
class FamilyMember extends Family {
  private _budget: number = 0;
  private _inherited: number = 0;

  constructor(public name: string) {
    super();
  }

  // Getter for budget (read-only)
  get budget(): number {
    return this._budget;
  }

  // Getter for inherited (read-only)
  get inherited(): number {
    return this._inherited;
  }

  spend(amount: number): number | string {
    if (amount <= this._budget) {
      return (this._budget -= amount);
    } else {
      return "You can't spend more than you have";
    }
  }

  inheritWealth(amount: number): number | string {
    const remainedWealth = Family.getWealth();

    if (amount <= remainedWealth) {
      Family.inheritWealth(amount);

      this._budget += amount;
      this._inherited += amount;

      return this._budget;
    } else {
      return "You can't get more than we have";
    }
  }

  // If you need to initialize budget for testing
  initializeBudget(amount: number) {
    this._budget = amount;
  }
}

const tusher = new FamilyMember("tusher");

// Initialize budget using a method instead of direct assignment
tusher.initializeBudget(1000);

console.log(tusher.budget); // This works (reading is allowed)

// The following would cause a TypeScript error (writing not allowed):
// tusher.budget = 2000;  // Error: Cannot assign to 'budget' because it is a read-only property

// Must use methods to modify properties
tusher.spend(300);
console.log(tusher.budget); // Should show 700

tusher.inheritWealth(500);
console.log(tusher.budget); // Should show 1200
console.log(tusher.inherited); // Should show 500
