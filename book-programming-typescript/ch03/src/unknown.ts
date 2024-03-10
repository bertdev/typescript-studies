// when you think about using any because you still dont know what type use, use unknown instead
// also means that type can be anything, but ts typechecker will make you verify what type is before you use that value

// ts typechecker will never use unkwon, so you have to explicitly annotate it
// you can compare values to unknown (===)
// before you can do some operation with unkwon you have to prove that this value is of that type frist

let x: unknown = 20;
let z = x === 30;
//let y = x + 10; // throw type error
if (typeof x === "number") { // proves that x is an number
    let y = x + 10; // then we can add to 10 
}
