// ? types vs interfaces
// By default, you should use interfaces where the properties of an object can be changed and you need specific features of interface like `extends`. Otherwise, use types.

// ! interface
interface User {
    name: string;
    age: number;
    email: string;
    readonly id: number;
}

interface Admin extends User {
    role: 'admin';
}

const user1: User = {
    name: 'John Doe',
    age: 30,
    email: 'lEY6n@example.com',
    id: 1,
};
console.log('🚀 ~ user1 (created with interface):', user1);

const admin1: Admin = {
    name: 'Jane Doe',
    age: 25,
    email: '3BhZ3@example.com',
    id: 2,
    role: 'admin',
};
console.log('🚀 ~ admin1 (created with interface):', admin1);

// ! type
type UserType = {
    name: string;
    age: number;
    email: string;
    readonly id: number;
};

type AdminType = UserType & {
    role: 'admin';
};

const user2: UserType = {
    name: 'Jane',
    age: 18,
    email: 'you@domain.com',
    id: 3,
};
console.log('🚀 ~ user2 (created with type):', user2);

const admin2: AdminType = {
    name: 'jane',
    age: 20,
    email: 'a@l.com',
    id: 2,
    role: 'admin',
};
console.log('🚀 ~ admin2 (created with type):', admin2);

// Generally types and interface are same unless you use methods offered by them. Like, when you are using extends in interface, it will be faster than & method of type
