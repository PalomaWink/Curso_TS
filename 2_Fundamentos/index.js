"use strict";
// tipo number
let x = 10;
console.log(x);
x = 20.545421; // Float tambem e considerado number
x.toPrecision(2); // Quando eu tipo, so consigo usar e acessar o que é atribuido aquele tipo, ou seja, aqui eu consigo usar um .toFixed tambem, mas
// não consigo usar um .toUpperCase(), por que isso so funciona com string
// tsc -w compila automaticamente
// Desafio 2
const a = 1;
const numberString = a.toString();
const printNumber = `EU vou imprimir o número ${numberString}`;
console.log(printNumber);
