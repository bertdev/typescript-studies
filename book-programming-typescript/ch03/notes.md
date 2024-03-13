# Type
Is a set of values and the things you can do with them

Example: Boolean type is the set of all booleans (true and false) and the operations you can perform on them (||, && and !)

# Type literal
Is a type that represents a single value and nothing else

```ts 
const a = true; // type -> true (value from subset of boolean)
const msg = "ola" // type -> "ola" (value from subset of string)
```

# Structural typing
A style of programming where you just care that an object has certain properties, and not what its name is (nominal typing). Also called duck typing in some languages.

Typescript favors structural typing

# Index signatures
In typescript you can say that an given object might contain more keys with the notation `[key: T]: U` (For this object, all keys of type T must have values of type U). `T` should be assignable to either number or string.
