// keyof operator : create a union (|) of all the keys of an object

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

console.log('🚀 ~ x:', x);
console.log('🚀 ~ getProperty(x, "a"):', getProperty(x, 'a'));
console.log('🚀 ~ getProperty(x, "b"):', getProperty(x, 'b'));
console.log('🚀 ~ getProperty(x, "c"):', getProperty(x, 'c'));
console.log('🚀 ~ getProperty(x, "d"):', getProperty(x, 'd'));
