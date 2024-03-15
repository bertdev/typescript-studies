// undefined -> something hasn't been defined yet
// null -> absence of a value
// void -> return type of a function that doesn't explicitly return anything
// never -> return type of a function that never returns at all
namespace NullUndefinedVoidNever {
    // returns number or null
    function a(x: number) {
        if (x < 10) {
            return x;
        }
        return null
    }

    // returns undefined
    function b() {
        return undefined;
    }

    // returns void
    function c() {
        let a = 2 + 2;
        let b = a * a;
    }

    //returns never
    function d() {
        throw TypeError("I always error");
    }

    // returns never
    function e() {
        while(true) {
        }
    }
}
