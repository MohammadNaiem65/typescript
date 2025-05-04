"use strict";
// Task 1:
function greet() {
    console.log('Hello World, I will complete this course successfully and become a Next level Web Developer!');
}
greet();
function createUser(name, age, role) {
    const user = {
        name,
    };
    if (role) {
        user.role = role;
    }
    return user;
}
