"use strict";
// ? types vs interfaces
// By default, you should use interfaces where the properties of an object can be changed and you need specific features of interface like `extends`. Otherwise, use types.
const user1 = {
    name: 'John Doe',
    age: 30,
    email: 'lEY6n@example.com',
    id: 1,
};
console.log('🚀 ~ user1 (created with interface):', user1);
const admin1 = {
    name: 'Jane Doe',
    age: 25,
    email: '3BhZ3@example.com',
    id: 2,
    role: 'admin',
};
console.log('🚀 ~ admin1 (created with interface):', admin1);
const user2 = {
    name: 'Jane',
    age: 18,
    email: 'you@domain.com',
    id: 3,
};
console.log('🚀 ~ user2 (created with type):', user2);
const admin2 = {
    name: 'jane',
    age: 20,
    email: 'a@l.com',
    id: 2,
    role: 'admin',
};
console.log('🚀 ~ admin2 (created with type):', admin2);
