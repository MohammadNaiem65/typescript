What I learned:

Video 1.3:

-   Typescript is a superset of javascript
-   Typescript is not recognized by the browser. To run the code, we need a transpiler like tsc.
-   We can compile our typescript code to javascript like this: `tsc module1/src/index.ts`.
-   We can configure the default behavior of typescript using tsconfig.json file. To generate a tsconfig file, run this command: `tsc --init`
-   We can select the directory from which to transpile our code to javascript by editing `rootDir` in tsconfig.json. Example: `"rootDir": "./src/"`
-   We can change the output directory by editing `outDir` in tsconfig.json. Example: `"outDir": "./dist/"`
