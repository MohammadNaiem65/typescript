{
  class Human {
    constructor(public leg: number, public hand: number) {}
  }

  //   Inheriting from Human
  class Male extends Human {
    constructor(
      leg: number,
      hand: number,
      public strong: boolean,
      public isEmployed: boolean
    ) {
      super(leg, hand);
    }

    doJob(workingHour: number): string {
      return `Bro, work for ${workingHour} hours`;
    }
  }

  //   Inheriting from Human
  class Female extends Human {
    constructor(leg: number, hand: number, public isCute: boolean) {
      super(leg, hand);
    }

    controlAndGrowFamily(): string {
      return "Love, make the whole family to reach to Jannah💝";
    }
  }

  const me = new Male(2, 2, false, true);
  console.log("🚀 ~ me:", me);
  console.log(me.doJob(12));

  const ahliya = new Female(2, 2, true);
  console.log("🚀 ~ ahliya:", ahliya);
  console.log(ahliya.controlAndGrowFamily());
}
