// Are a way to enumerate the possible values for a type
// think of them like objects where the keys are fixed at compile time,
// so the typecheck can verify if the given key actually exists when you access it

namespace Enums {
    //string to number
    enum Language { // by convention Enum names are Uppercase and singular, keys are also uppercase
        English, // English = 0
        Spanish, // Spanish = 1
        Russian // Russian = 2
    }

    enum Color {
        Red = 0,
        Blue = 1
    }

    //typescript will merge this declaration to the declaration above,
    //but will only infer values for one of those declaration, so you
    //have to do it explicitly
    enum Color {
        Yellow = 2
    }
    
    let myFirstLanguage = Language.Russian;
    let myFavoriteColor = Color["Red"];

    enum Country {
        Brazil = 100,
        Russia = 200 + 300,
        Spain // typescript infers 501 (the next number after 500)
    }

    enum Color {
        Pink = 0xc10050,
        White = 255,
        Cian = "#007ac1"
    }

    //typescript allows you get enum from value too, but its unsafe
    let a = Color.Red;
    let c = Color[2]; //Color.Blue
    let d = Color[20]; //does not exists but does not throw an error

    //to prevent that unsafe behavior use const when declaring an enum
    const enum Friends {
        JoaoMarcelo,
        JoaoPedro,
        Henrique
    }
    // const enum doesn't generate any javascript code, instead inlines the enum member's value wherever it's used
    // if you want generate javascript code for const enums, enable this settins on your tsconfig.json:
    // {
    //  "compilerOptions": {
    //      "preserveConstEnums": true
    //  }
    //}
    let b = Friends.Henrique;
    //let e = Friends[5]; // type error
    
    //string to string enums
    const enum Flippable {
        Burger = "Burger",
        Chair = "Chair",
        Cup = "Cup",
        Skateboard = "Skateboard",
        Table = "Table"
    }

    function flip(f: Flippable) {
        return "flipped " + f;
    }

    flip(Flippable.Cup);
    //flip(12); //type error
    //flip("Hat"); // type error
    

    // Because of all the pitfalls that come with using enums safely, 
    // I recommend you stay away from them—there are plenty of better 
    // ways to express yourself in TypeScript.
}
