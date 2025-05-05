"use strict";
// @ Encapsulation - Encapsulation is putting data and the functions into a single package (place) that use that data
class Player {
    constructor(name, salary, skill) {
        this.name = name;
        this.salary = salary;
        this.skill = skill;
    }
    getYearlySalary() {
        return this.salary * 12;
    }
}
const tanjimSakib = new Player("Tanjim Sakib", 50000, "all-rounder");
const musfik = new Player("Musfik Ur Rahim", 70000, "bowler-keeper");
console.log(tanjimSakib.getYearlySalary());
console.log(musfik.getYearlySalary());
