{
    // ! Type Assertion / Type Casting
    // In TypeScript, type assertion is a way to tell the compiler to treat a value as a different type. This is useful when you know more about the type of a value than TypeScript does. Type assertion is similar to type casting in other languages, but it does not perform any special checking or restructuring of data. It has no runtime impact and is only used by the compiler.
    // Type assertion is done using the `as` keyword or the angle-bracket syntax. The `as` keyword is preferred in JSX files, while the angle-bracket syntax is not allowed in JSX files. Here are some examples of type assertion in TypeScript:
    const add = (a: number, b: number): any => a + b; // function that adds two numbers and returns a value of type `any`

    const result = add(2, 3); // result is inferred as number
    // Type assertion is used to tell the compiler that we know the type of `result` is `number` even though it is inferred as `any`.
    const resultAsString = result as unknown as string; // type assertion using `as` keyword
    const resultAsString2 = <string>result; // type assertion using angle-bracket syntax

    // Another example of type assertion is when we have a value that can be of multiple types, such as a union type. In this case, we can use type assertion to narrow down the type of the value. For example:
    const value: string | number = 'Hello'; // value can be either string or number

    const stringValue = value as string; // type assertion to treat value as string
    const numberValue = (<unknown>value) as number; // type assertion to treat value as number (first asserted as unknown, to be able to assert as number)

    // ? Example 1:
    const converKGtoGrams = (weight: number | string): number | string => {
        let value: number | string;
        // Check if the weight is a string
        if (typeof weight === 'string') {
            value = parseFloat(weight);

            return `the converted value is: ${value * 1000}`;
        } else {
            return weight * 1000;
        }
    };

    const weight1 = converKGtoGrams(2) as number; // weight1 is inferred as number | string and asserted as number
    const weight2 = converKGtoGrams('2') as string; // weight2 is inferred as number | string and asserted as string
    const weight3 = converKGtoGrams('2.5') as string; // weight3 is inferred as number | string and asserted as string

    console.log(weight1); // 2000
    console.log(weight2); // the converted value is: 2000
    console.log(weight3); // the converted value is: 2500

    // So from another view, type assertion can be called as type narrowing, because it narrows down the type of a value to a more specific type.

    // ? Example 2:
    type Error = {
        message: string;
    };

    try {
        // do nothing
    } catch (error) {
        console.log((error as Error).message);
    }

    try {
        // do nothing
    } catch (error) {
        console.log((<Error>error).message);
    }
}
