"use strict";
// 1 - Void - Essa tipagem funciona a para funcoes que não tem retorno, caso ela tenha, preciso tipar meu retorno primeiro
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return `Olá${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Paloma');
preGreeting(greeting, 'João');
// 3 - Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
// console.log(firstElement('String')); -> assim ele não aceita por que não é um array
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObject({ name: 'Paloma' }, { age: 30, job: 'Dev' });
console.log(newObject);
// 4 - Constraints nas Generic Functions
// Ela limita os tipos que podem ser utilizados no Generic, fazendo com que nosso escopo seja menos abrangente;
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '13'));
// console.log(biggestNumber('12', 5)); -> aqui ele aponta que o erro esta por que são dois valores de tipos diferentes
// 5 - Defininco tipo de parâmetros
// Precisamos usar paramentro de tipos semelhantes, se não recebemos um erro;
// Mas existe há possibilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
// Fazendo isso, conseguimos determinar o tipo que esse retorno vai ter, diretamente no retorno
console.log(mergeArrays([1, 2, 3], ['Testando', 'Teste']));
// 6 - Parametros opcionais
function modernGreeting(name, greet) {
    // Narrowing são as validações condicionais
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Matheus'));
// 7 - Parametros default 
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 - Tipo unknown
// é utilizado de forma semelhante ao any, aceitando qualquer tipo de dado;
// ele não deixa ser executado se não houver validação de tipo; 
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
        // sempre precisamos estar testando o tipo para que ele funcione
    }
    else if (typeof x === 'number') {
        console.log('x é um número');
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - Tipo never
// é parecido com o void, porém é utilizando quando a função não retorna nada
// precisamos utilizar o throw new Error
function showErrorMessage(msg) {
    throw new Error(msg);
}
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 8, 5, 6, 10));
console.log(sumAll(10));
// 11 - Destructuring em parâmetros
// desestruturar o que vem de uma função, ou de alguma chamada
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
