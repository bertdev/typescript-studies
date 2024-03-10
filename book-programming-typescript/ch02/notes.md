# The compiler (tsc)
Usual process:
program -(compiler)-> ast -(compiler)-> bytecode -> runtime evaluation

Typescript process:
program (ts) -(compiler - tsc)-> ast -> typechecking -(compiler)-> javascript code

After compiled from ts to js code, the types are no longer in your code, they are used only for typechecking in compile time and throwed away after that

# Typechecker
A special program that verifies that your code is typesafe

# Type system 
A set of rules that typechecker uses to assing types to your program
- Explicit: you have to tell the compiler what type everything is with explicit syntas
- Infer: the compiler will infer your types automatically for you

# Typescript type system
Typescript type system cover both approches explicit and infer, you can annotate your types or let the compile handle that for you

```ts
// Explicit
let a: number = 1;
let b: string = "hello";
let c: boolean[] = [true, false];

let d = 1;
let e = "hello";
let f = [true, false];
```

In general an good style is to let typescript infer as many types as it can and use annotations minimum possible, but aways try aim for 100% type coverage.

# Project base config

Install tsc and tslint(linter)
```bash
npm init
npm install  --save-dev typescript tsling @types/node
```

Create tsconfig.json file to do typescript copile configuration
```json
{
    "compilerOptions": {
        "lib": ["ESNext"], -> which js version should be considered as running version
        "module": "commonjs", -> which module system should ts compile to
        "outDir": "dist", -> witch folder js code will be put into
        "sourceMap": true,
        "strict": true, -> be as strict as possible when checking invalid code
        "target": "ESNext" -> which js version will be compiled to
    },
    "include": ["src"] -> where look to find ts files
}
```

Create tsling.json file to config code liting
```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "rules": {
        "semicolon": false,
        "trailing-comma": false
    }
}
```
