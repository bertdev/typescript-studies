let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;

const mappedItens = doSomeStuff(Object.keys(c));

function doSomeStuff(a: any) {
    return a.map((i:any) => i.concat("changed"))
}
