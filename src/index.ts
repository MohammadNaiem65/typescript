// ! Generic function with constrains
// A generic function with constrains is a function that has a type parameter that has a constraint on it. The constraint is a type that must be satisfied by the type parameter.
function user<T extends { name: string; email: string }>(params: T) {
    // In this example, the name and email properties are required in the type parameter T which constrains the type of params.
    return {
        ...params,
        id: Math.floor(Math.random() * 1000),
        name: params.name,
        email: params.email,
    };
}

const user1 = user({ name: 'user 1', email: 'user@user.com' });
console.log('🚀 ~ user1:', user1);

const user2 = user({ name: 'user 2', email: 'user@user.com', adult: true });
console.log('🚀 ~ user2:', user2);
