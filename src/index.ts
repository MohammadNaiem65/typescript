/**
 * A generic function that reduces an array of numbers or strings by addition
 * @param arr - Array of numbers or strings to be reduced
 * @returns - A single number or string based on the input array type
 */
// function reduceArray<T extends number | string>(arr: T[]): T {
//     // Use reduce with proper type handling
//     return arr.reduce((acc, current) => {
//         if (typeof acc === 'number' && typeof current === 'number') {
//             return (acc + current) as T;
//         } else if (typeof acc === 'string' && typeof current === 'string') {
//             return (acc + current) as T;
//         }
//         // This should never happen due to our constraints, but TypeScript needs it
//         throw new Error('Unsupported types for reduction');
//     });
// }

// // Example usage with numbers
// const numbers = [1, 2, 3, 4, 5];
// const sumResult = reduceArray(numbers);
// console.log(`Sum result: ${sumResult}, type: ${typeof sumResult}`); // Output: Sum result: 15, type: number

// // Example usage with strings
// const strings = ['Hello', ' ', 'World', '!'];
// const concatResult = reduceArray(strings);
// console.log(
//     `Concatenation result: "${concatResult}", type: ${typeof concatResult}`
// ); // Output: Concatenation result: "Hello World!", type: string

// ! Generic function
function reduceNormal(params: number[] | string[]) {
    if (typeof params[0] === 'number') {
        return (params as number[]).reduce((a, b) => a + b, 0);
    } else {
        return (params as string[]).reduce((a, b) => a + b, '');
    }
}

console.log(reduceNormal([1, 2, 3, 4]));
console.log(reduceNormal(['a', 'b', 'c', 'd']));

function reduceGeneric<T extends number | string>(params: T[]): T {
    if (typeof params[0] === 'number') {
        return (params as number[]).reduce((a, b) => a + b, 0) as T;
    } else {
        return (params as string[]).reduce((a, b) => a + b, '') as T;
    }
}

const reduceGenericExample1 = reduceGeneric([1, 2, 3, 4]);
console.log('🚀 ~ reduceGenericExample1:', reduceGenericExample1);

const reduceGenericExample2 = reduceNormal(['a', 'b', 'c', 'd']);
console.log('🚀 ~ reduceGenericExample2:', reduceGenericExample2);
