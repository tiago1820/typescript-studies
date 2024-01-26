// function suma(a: number, b: number) {
//     return a + b;
// }

// console.log(suma(1, 3));

// const nombre: string = "Miguel";

// const persona = {
//     name: "Pepe",
//     age: 30
// }

// console.log(persona.name);
// // ignore el tipo
// let anyValue: any = "hola";
// // let anyValue: unknown = "hola";

// functions
// function saludar(name: string) {
//     console.log(`Hola ${name}`);
// }

// saludar("Pepe");

// function saludar({name, age}: {name: string, age: number}){
//     console.log(`Hola ${name}, tienes ${age} años`);
// }

// saludar({name: "Pepe", age: 2});

// function saludar(persona: {name: string, age: number}){
//     const { name, age } = persona;
//     console.log(`Hola ${name}, tienes ${age} años`);
// }
// saludar({name: "Pepe", age: 2});

// const sayHiFromFunction = (fn: (name: string) => void) => {
//     fn("Tiago");
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`);
// }

// // void: no importa lo que devuelva

// sayHiFromFunction(sayHi)

// const sumar = (a: number, b: number): number => {
//     return a + b;
// }

// // Tipar las arrow function
// const restar: (a: number, b: number) => number = (a, b) => {
//     return a - b;
// }

// never
// function throwError(message: string): never {
//     if(message) throw new Error(message);
//     throw new Error(message);
//     process.exit(1);
// }

// function logMessage(message: string): void {
//     console.log(message);
//     // return implicito -> te da igual -> no devuelve nada
    
// }

// inferencia funciones anonimas segun el contexto
// const avengers = ["Spidey", "Hulk", "Avengers"];

// avengers.forEach(function (avenger) {
//     console.log(avenger.toUpperCase())
// })

// Objetos
// let hero = {
//     name: "thor",
//     age: 1500
// };

// function createHero(name: string, age: number) {
//     return {
//         name, age
//     }
// }

// createHero("Thor", 1500)

// Type Alias
// type Hero = {
//     name: string,
//     age: number
// }

// let hero: Hero = {
//     name: "thor",
//     age: 1500
// };

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero;
//     return { name, age }
// }

// createHero({ name: "Thor", age: 1500 });

// Optional properties
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type Hero = {
//     readonly id?: HeroId
//     name: string
//     age: number
//     isActive?: boolean
// }

// let hero: Hero = {
//     name: "thor",
//     age: 1500
// };

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero;
//     return { 
//         id: crypto.randomUUID(),
//         name, 
//         age, 
//         isActive: true 
//     }
// }

// const thor = Object.freeze(createHero({ name: "Thor", age: 1500 }));
// console.log(thor.isActive);

// thor.id?.toString;
// thor.id = 2323232323232323;

// template union types
// type HexadecimalColor = `#${string}`;
// const color: HexadecimalColor = "0033ff"; // hexadecimales
// const color2: HexadecimalColor = "#0033ff"; // hexadecimales

// Union Types
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = "local" | "planetary" | "galatic" | "universal" | "multiversal";

type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean,
    powerScale?: HeroPowerScale
}

let hero: Hero = {
    name: "thor",
    age: 1500
};

function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return { 
        id: crypto.randomUUID(),
        name, 
        age, 
        isActive: true 
    }
}

const thor = createHero({ name: "Thor", age: 1500 });
thor.powerScale = "galatic";
















































