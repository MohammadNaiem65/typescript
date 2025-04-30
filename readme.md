# Reference data types:

-   `Object`
    -   Data type in object can be set like normal primitive data types.
    -   `?` can be used to make a property optional. E.g.
        ```
        const user: {
            firstName: string;
            middleName?: string; // Optional property (type)
            lastName: string;
        } = {
            firstName: 'Jhanker',
            lastName: 'Mahbub',
        };
        ```
    -   We can explicitly write the value of a property as the type for a fixed value property. This types are called `literal` types. E.g.
        ```
        const user: {
            firstName: string;
            middleName?: string; // Optional property (type)
            lastName: string;
            readonly isMarried: true; // Literal type
        } = {
            firstName: 'Jhanker',
            lastName: 'Mahbub',
            isMarried: true
        };
        ```
        `Note:` `readonly` is a keyword in typescript used to make a property read-only and that property is not changeable.
