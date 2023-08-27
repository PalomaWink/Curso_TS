"use strict";
// 1 - arrays (sintaxe comum)
let numbers = [1, 2, 3];
numbers.push(5);
const nomes = ['Paloma', 'Laise', 'Wink'];
// Outra forma de tipar um array Array<number> (tu diz que é um array e entre tags o tipo de array)
const num = [100, 200];
// 2 - tipo any
const arr1 = [1, 'teste', true, [], { nome: 'Paloma' }];
// Da pra usar .push, .map, por que é um array com varios tipos diferentes de valores
// 3 - tipando o retorno da funcao
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 5));
// 4 - Funções anonimas em TS
setTimeout(function () {
    const sallary = 1000;
}, 2000);
// 5 - tipos de objeto 
function passCordinates(coord) {
    console.log(('x coordenates: ' + coord.x));
    console.log(('y coordenates: ' + coord.y));
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord); // quando vou passar os parametros, ele pede para que sejam do tipo que ele recebe na função, igual o JS
// mas com o TS não pode sair do que foi tipado na funcao
// 6 - Propriedades opcionais
function showNumber(a, b, c) {
    console.log("a: " + a);
    console.log("b: " + b);
    if (c) {
        console.log("c: " + c);
    }
}
showNumber(1, 2, 3);
showNumber(4, 5);
// showNumber(6)
// 7 - Validando argumentos opcionais
function advacedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
}
console.log(advacedGreeting("Matheus", "Battisti"));
console.log(advacedGreeting("Paloma"));
// 8 - Union types
// É uma alternativa melhor do que o Any, sendo possivel deteminar dois tipos para um dado
// a sintaxe é number | string (aceita um ou outro)
function showBalance(balance) {
    console.log(`O saldo da sonta é R$${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, 'teste']; // Essa tambem e uma forma de escrever
// 9 - Avancando em Union Type
// Aqui foi feito uma função com validacão para o login de um usuário, levando em consideração como o backend foi programado tambem
// Não teve nada de novo, apenas um reforco de conteudo
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
/* function showCoords(obj: {x: number, y: number, z: number}) {

} */
// substitui a funcao de cima pelo interface
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
// Se eu quiser criar uma variavel que segue a mesma estrutura do interface eu posso
// Sem precisar criar outra interface
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: 'Paloma', age: 28 };
console.log(somePerson);
/* type personType = {
    age: number
} */
// ele entende o type como uma "constante" e da o segunte erro: Identificador 'personType' duplicado.
// 13 - Literal types
// Permite que seja colocado valores como tipos, isso permite restringir não so os tipos, mas também os valores (duble check)
let result;
console.log(test);
function showDirection(direction) {
    console.log(`A direcao é ${direction}`);
}
showDirection('center');
showDirection('left');
// 14 - Non-null Asserttion Operator
// As vezes o TS pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponivel
// Se sabemos que o valor será preenchido podemos evitar o erro usando o !
const p = document.getElementById("some-p");
console.log(p.innerText); //Como se trata de um elemento do DOM ele caracteriza como Null, então tem que colocar o ?(se o valor for opcional) ou !(se sabemos que em algum momento do codigo o valor vai ser informado)
// OS TIPOS DA 15 E 16 SO CONSIGO USAR COM O ES2020 (LINHA 14 DO TSCONFIG.JSON)
/* // 15 - Bigint
// É possivel declarar números com valores muito altos;
// Podemos utilizar a notação literal, exemplo 100n
// Mas pra usar precisamos mudar a config do TS, para versão minima de ES2020

let n: bigint

n = 1000n

console.log(typeof n);

// 16 - Symbol
// cria uma referência única para um valor;
// symbol so pode ser comparado com symbol

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(symbolA === symbolB)
console.log(symbolA === symbolA); */
