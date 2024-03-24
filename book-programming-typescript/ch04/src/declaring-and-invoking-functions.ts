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

// ---- generator functions ----
// generator is a function that can produce values on demand
// only when you ask for it so, after send you the value, his execution
// will stop until next call

function* createFibonacciGenerator(): IterableIterator<number> {
    let a = 0;
    let b = 1;
    while (b < 8) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());

// ---- iterators ----
// itarable is any object that contains a property called Symbol.iterator,
// whose values is a function that returns an iterators
//
// iterator is any object that defines a method called next, which returns
// an object with properties value and done
//
//when create a generator function it returns an iterable iterator, because
//it implements Symbol.iterator and next method 

//iterator manual definition

let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 3; n++) {
            yield n;
        }
    }
};

//when you use for of, you are actualy using built in iterators from javascript

for (let a of numbers) {
    console.log(a);
}

// ---- call signatures ----

// (first: number, second: number) => number is the function type annotation
// its only type level code so parameters names are not affected by the name used in annotation
let sub: (first: number, second: number) => number = (a: number, b: number): number => {
    return a - b;
}

type Greet = (name: string) => string;
// shorthand call signature
type Log = (message: string, userId?: string) => void;
// full call signature
type SumVariadicSafe = {
    (...numbers: number[]): number;
}

let greet: Greet = (name) => `Hello ${name}`;
console.log(greet("Herbert"));

// ---- contextual typing ----
// in some contexts you does not have to type your code
// typescript can infer its type by context like in the variable greet
// we did not annotate the parameter name or the function return
// typescript infer it for us

function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

// typescript will infer the type of any by the context
times(n => console.log(n), 4);

// ---- overloaded function type ----
//
// have multiple type annotations for one function

type Reservation = {};
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
}

let reserve: Reserve = (
    from: Date, 
    to: Date | string, 
    destination?: string
) => {
    if (to instanceof Date) {
        to.getMonth();
    }
    console.log(from, to, destination);
    return {};
}

type HTMLAnchorElement = "<a>";
type HTMLCanvasElement = "<canvas>";
type HTMLTableElement = "<table>";
type HTMLElement = string;
type CreateElement = {
    (element: "<a>"): HTMLAnchorElement;
    (element: "<canvas>"): HTMLCanvasElement;
    (element: "<table>"): HTMLTableElement;
    (element: string): HTMLElement;
}

let createElement: CreateElement = (element: string): HTMLElement => {
}

// function overloading can be on function declaration too

function createElements(tag: "a"): HTMLAnchorElement
function createElements(tag: "canvas"): HTMLCanvasElement
function createElements(tag: "table"): HTMLTableElement
function createElements(tag: string): HTMLElement {
    return ""
}

createElements("table");
