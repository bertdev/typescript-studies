// union -> A{a,b} | B{c} -> {a,b,c}

import { type } from "os"

// intersection -> A{a,b} & B{b,c} -> {b}
namespace UnionIntersection {
    type Cat = {name: string, purrs: boolean}
    type Dog = {name: string, barks: boolean, wags: boolean}
    //union
    type CatOrDogOrBoth = Cat | Dog
    type CatAndDog = Cat & Dog

    //Cat
    let a: CatOrDogOrBoth = {
        name: "Bonkers",
        purrs: true
    }

    //Dog
    a = {
        name: "Domino",
        barks: true,
        wags: true
    }

    //Both
    a = {
        name: "Dunkers",
        barks: true,
        purrs: true,
        wags: true
    }

    let b: CatAndDog = {
        name: "Domino",
        wags: true,
        barks: true,
        purrs: true,
    }

    type Return = string | null
    function trueOrNull(isTrue: boolean): Return {
        if (isTrue) {
            return "true";
        }
        return null;
    }
}
