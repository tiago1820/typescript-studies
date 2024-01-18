"use strict";
// string, boolean, number, ...
let x = 10;
x = 20;
console.log(x);
// inferencia x annotation
let y = 12;
// y = "teste";
let z = 12;
// tipos básicos
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Joao";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];
// object literals -> {prop: value};
const user = {
    name: "Pedro",
    age: 18
};
console.log(user);
console.log(user.name);
// user.job = "Programador";
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola v",
    size: Size.G,
};
console.log(camisa);
// literal types
let teste;
// teste = "outrovalor";
teste = "autenticado";
teste = null;
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log((`Ola ${greet} ${name}`));
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("José");
greeting("Pedro", "Sir");
// interfaces
