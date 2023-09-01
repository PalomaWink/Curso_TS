"use strict";
// 1 - type guard
function calcularASoma(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('impossivel realizar a soma!');
    }
}
calcularASoma(1, 2);
calcularASoma(45.8, 46.6);
calcularASoma('a', 10);
// 2 - checando se valor existe
function operations(arr, operator) {
    if (operator) {
        if (operator === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operator === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor, defina uma operação!');
    }
}
operations([1, 2, 3], 'sum');
operations([1, 2, 3], 'multiply');
operations([1, 2, 3]);
// Utilizando Narrowing para verificar class utilizando o operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
// Narring com operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
//Aqui eu to tipando com base na classe
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log('O cachorro é SRD');
    }
}
showDogDetails(turca);
showDogDetails(bob);
// Atividade Desafio 3
function rewiewStarts(start) {
    if (start === 1) {
        console.log('Muito ruim');
    }
    else if (start === 2) {
        console.log('Ruim');
    }
    else if (start === 3) {
        console.log('Mediano');
    }
    else if (start === 4) {
        console.log('Bom');
    }
    else if (start === 5) {
        console.log('Excelente');
    }
    else {
        console.log('Faça uma revisão');
    }
}
rewiewStarts(1);
rewiewStarts(2);
rewiewStarts(3);
rewiewStarts(4);
rewiewStarts(5);
rewiewStarts(false);
