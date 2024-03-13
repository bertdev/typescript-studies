//typescript has structural typing
//in typescript objects created using {} and new Class has no difference

namespace Objects {
    let a = {
        b: "x"
    } // { b: string }

    let b: {a: string} = {
        a: "x"
    } // { a: string }

    const c: {a: number} = {
        a: 12
    } // {a: number} -> here only the memory reference is constant, not object properties values

    // these two objects has the same type
    let p: {
        firstName: string;
        lastName: string;
    } = {
        firstName: "Herbert",
        lastName: "Evangelista" 
    };

    class Person {
        constructor(
            public firstName: string,
            public lastName: string
        ) {}
    }

    p = new Person("Adi", "Silva");

    let d: {
        b: number; //should have
        c?: string; //optional
        [key: number]: boolean //can have (index signatures)
    }
    d = {b: 1}
    d = {b: 1, c: undefined}
    d = {b: 1, c: "x", 10: true}

    let user: {
        readonly firstName: string
    } = {
        firstName: "Elibert"
    }
    //user.firstName = "invalid"; cant reassing to an read-only 

    //every type except null and undefined is assingable to an empty object type
    let danger: {};
    danger = {};
    danger = [];
    danger = 2;
}
