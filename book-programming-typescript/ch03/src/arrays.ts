namespace Arrays {
    let a = [1, 2, 3]; //number[]
    let b = ["a", "b"]; //string[]
    let c: string[] = ["a"]; //string[]
    let d = [1, "a"]; //(string | number)[]

    let f = ["red"]; //string[]
    f.push("blue");
    //f.push(true); type error

    let g = []; //any[]
    g.push(1); //any[] -> number[]
    g.push("red"); //number[] -> (string|number)[]

    let h: Array<string> = ["a"]; //Array<T> = T[]

    //Read only array -> create imutable array
    let as: readonly number[] = [1, 2, 3];
    let bs: readonly number[] = as.concat(4);
    //as[4] = 5; error
    //as.push(4); error
    type A = Readonly<string[]>
    type B = ReadonlyArray<string>
    type C = readonly string[]
}
