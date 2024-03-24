// Filter definition with a polymorphic parameter or generic parameter
// by convention people define generics using uppercase letters starting
// with T.
type Filter = {
    // because we type <T> in the call signature, typescript will bind
    // the generic to a type when you call the function
    <T>(array: T[], f: (item: T) => boolean): T[]
}

// because we type <T, U> in the type signature, typescript will bind the 
// generic to a type when you implement the function 
type MapCustom<T, U> = {
    (array: T[], f: <U>(item: T) => U): U[]
}

const filter: Filter = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
}

// you has to set the type genrics here
const map: MapCustom<number, number> = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result.push(f(item));
    }
    return result;
}

// in general you should prefer use generics in functions to be bind when
// you call then, in classes when you instantiate them, and for types
// and interfaces when you implement them

// T is bound to number
filter([1, 2, 3, 4], i => i === 2);

// T is bound to string
filter(["a", "b"], _ => _ === "b");

// T is bound to {firstName: string}
let names = [
    { firstName: "Herbert" },
    { firstName: "Karolina" }
];
filter(names, _ => _.firstName.startsWith("K"));


