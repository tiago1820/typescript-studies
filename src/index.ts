// string, boolean, number, ...
let x: number = 10;

x = 20;

console.log(x);

// inferencia x annotation
let y = 12;
// y = "teste";

let z: number = 12;

// tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// String != string
console.log(typeof firstName);
firstName = "Joao";
console.log(firstName);

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];

// object literals -> {prop: value};
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
}

console.log(user);
console.log(user.name);

// user.job = "Programador";

// any
let a:any = 0;
a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;
// id = true;
// id = [];

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola v",
    size: Size.G,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;
// teste = "outrovalor";
teste = "autenticado";
teste = null;

// funcoes
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 12));
// console.log(sum("12", true));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Matheus"));

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void {
    if(greet) {
        console.log((`Ola ${greet} ${name}`));
    } else {
        console.log(`Olá ${name}`); 
    } 
}

greeting("José");
greeting("Pedro", "Sir");

// interfaces





































