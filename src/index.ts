// ! Generic types with type aliases
// Generic type is a generalized type (or same quality) of different types which shared by all.

type Lists<T> = Array<T>; // A Generic Array

const stringList: Lists<string> = ['a', 'b', 'c', 'd'];
const numberList: Lists<number> = [1, 2, 3, 4];
const objectList: Lists<{ readonly id: number; name: string }> = [
    { id: 1, name: 'jhon' },
];

console.log('🚀 ~ objectList:', objectList);

type GenericTuple<X, Y, Z> = [X, Y, Z]; // A Generic Tuple

const rifat: GenericTuple<string, string, boolean> = ['rifat', 'male', true];
console.log('🚀 ~ rifat:', rifat);
