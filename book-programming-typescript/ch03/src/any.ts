//should be avoided
//is the type used when typescript can't figure out what type something is

// any type says that your value can by anything and you can do anything
// so will not prevent type errors

let a: any = 666;
let b: any = ["danger"];
let c = a + b;

// tip: you can add "noImplicitAny" flag on your "tsconfig.json"
// then ts typechecker will complain about any implicit, if 
// you already set "strict" as true, this behavior already happens
