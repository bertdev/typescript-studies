// alaises are never iferred by typescript, has to be done explicitly
namespace TypeAliases {
    type Age = number
    type Person = {
        name: string
        age: Age
    }

    //let age: Age = 33;
    // as age is an alias, we can use the base type
    let age = 33;
    let driver: Person = {
        name: "Timoty",
        age: age
    }

    //types aliases are block scoped
    type Color = "red";
    let x = Math.random() < .5;
    if (x) {
        type Color = "blue";
        let b: Color = "blue";
    } else {
        let c: Color = "red";
    }
}
