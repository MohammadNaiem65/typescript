{
  // Normal  Class
  class AnimalN {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`${this.name} is saying ${this.sound}`);
    }
  }

  const catN = new AnimalN("Billu", "cat", "meew");
  //   console.log("🚀 ~ cat:", catN);

  //   Class using Parameter Properties
  class AnimalP {
    constructor(
      public name: string,
      readonly gender: "male" | "female",
      private nickname: string,
      protected id: number
    ) {
      // no need to initialize the properties
    }

    getId(): number {
      console.log(`${this.name} has id: ${this.id}`);
      return this.id;
    }

    getNickname(): string {
      console.log(`${this.name}'s nickname is: ${this.nickname}`);
      return this.nickname;
    }
  }

  const catP = new AnimalP("Muyejja", "female", "Billu", 1);
  console.log("🚀 ~ catP:", catP);
  console.log("🚀 ~ catP id:", catP.getId());
  console.log("🚀 ~ catP nickname:", catP.getNickname());
  console.log("🚀 ~ catP.name:", catP.name); // Default name

  catP.name = "Muyezza";
  console.log("🚀 ~ catP.name:", catP.name); // After updating name

  console.log("🚀 ~ catP:", catP.gender); // Gender is readonly, so can't be updated.
  console.log("🚀 ~ catP:", catP.id); // Id is protected and accessible to the class itself and it's children classes (subclasses).
  console.log("🚀 ~ catP:", catP.nickname); // Nickname is private and only accessible to the call itself.
}
