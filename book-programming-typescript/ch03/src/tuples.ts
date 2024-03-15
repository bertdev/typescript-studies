//Tuple are subtypes of array, they're a special way to type arrays that have fixed lengths, where the values at each index have specific, known types.
namespace Tuples {
    let a: [number] = [1];

    //[first name, last name, birth year]
    let b: [string, string, number] = ["herbert", "henrique", 2001];

    //optional elements -> ?
    let trainFares: [number, number?][] = [
        [3.75],
        [8.25, 7.70]
    ];

    //equivalently
    let moreTrainFares: ([number] | [number, number])[] = [
        [3.75],
        [8.25, 7.70]
    ];

    //using rest to define minimum size of an tuple
    let friends: [string, ...string[]] = ["Karolina", "Adi", "Dudu"];
    let list: [number, boolean, ...string[]] = [1, true, "a", "b"];

    //read only tuple -> create imutable tuple
    let as: readonly [number, string] = [1, "opa"];
    //as[1] = "ola"; error 
    let bs: Readonly<[number, string]> = [1, "opa"];
    //bs[1] = "ola";
}
