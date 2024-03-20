//
//  ---- declaring function ----
//
// mandatory type annotations for parameters and optional annotations for return
// parameters are piece of data that a function need to run, declarated as part of a function
// arguments is a piece of data that you passed to a function when invoking it
//
// named function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

// function expression
const add2 = function(a: number, b: number): number {
    return a + b;
}
console.log(add2(1, 2));

//arrow function expression
const add3 = (a: number, b: number): number => {
    return a + b;
}
console.log(add3(1, 2));

//shorthandle arrow function expression
const add4 = (a: number, b: number): number => a + b;
console.log(add4(1, 2));

// function constructor - do not use - its totally unsafe
// its parameters and return are untyped
const add5 = new Function("a", "b", "return a + b");
console.log(add5(1, 2));

// ---- optional and default parameters ----

// optional parameters (?) should be the last ones declared
function log(message: string, userId?: string): void {
    let time = new Date().toLocaleString();
    console.log(time, message, userId || "Not signed in");
}

log("Page loaded");
log("User signed in", "1234");

// using default values, you don't need mark an parameters as optional
// explicitly type it or put it on the end of your list of parameters
function logWithUserDefault(message: string, userId = "1234") {
    let time = new Date().toLocaleString();
    console.log(time, message, userId);
}

logWithUserDefault("User signed out");

// ---- rest parameters ----
// an function can have only one rest parameter an should be the last one of the list of parameters
function sumVariadic(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadic(1, 2, 3));

// ---- call, apply and bind ----
// other ways to call an function
console.log(sumVariadic.call(null, 1, 2, 3));
console.log(sumVariadic.apply(null, [1, 2, 3]));
console.log(sumVariadic.bind(null, 1, 2, 3)());
// To safely use .call , .apply , and .bind in your code, be sure to
//enable the strictBindCallApply option in your tsconfig.json (it’s
//automatically enabled if you already enabled strict mode).

// ---- typing this ----
// every function has its own this, and can change by the way you call the function
// For this reason, a lot of teams ban this everywhere except in class
//methods—to do this for your codebase too, enable the no-invalid-this TSLint rule.

let x = {
    a() {
        return this;
    }
}
x.a(); // this is the object x

let a = x.a;
a(); // this is undefined

//this type annotation should be the first param
function fancyDateFormat(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
console.log(fancyDateFormat.call(new Date));
