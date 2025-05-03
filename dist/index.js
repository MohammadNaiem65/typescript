"use strict";
// keyof operator
function getProperty(obj, key) {
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
