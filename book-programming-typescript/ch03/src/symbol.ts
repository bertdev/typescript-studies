let k = Symbol("a");
let j: symbol = Symbol("b");
const i: unique symbol = Symbol("f"); //typeof {var-name}
//let t = k + "b";

//js always create a new unique symbol, even if you use the same base value
//Symbol("a") === Symbol("a") -> false
