"use strict";
// function suma(a: number, b: number) {
//     return a + b;
// }
var _a;
let hero = {
    name: "thor",
    age: 1500
};
function createHero(hero) {
    const { name, age } = hero;
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    };
}
const thor = Object.freeze(createHero({ name: "Thor", age: 1500 }));
console.log(thor.isActive);
(_a = thor.id) === null || _a === void 0 ? void 0 : _a.toString;
// thor.id = 2323232323232323;
// template union types
// type HexadecimalColor = `#${string}`;
// const color: HexadecimalColor = "0033ff"; // hexadecimales
// const color2: HexadecimalColor = "#0033ff"; // hexadecimales
