"use strict";
// 1 - Generics
// utilizamos generics quando uma funcao pode aceitar mais de um tipo
function showData(data) {
    return `O dado e: ${data}`;
}
console.log(showData("Teste"));
console.log(showData(123));
console.log(showData(true));
// 2 - Restrições (constraints) em generics
// podemos restringir os tipos que a funcao pode aceitar
function showProductName(obj) {
    return `O nome do produto e: ${obj.name}`;
}
const myProduct = { name: "Produto 1", cor: 'branca' };
const myProduct2 = { cor: 'branca' };
const myProduct3 = { name: 123 };
console.log(showProductName(myProduct));
const myCar = { name: 'Carro', wheels: 4, engine: 1 };
const myPen = { name: 'Caneta', wheels: true, engine: false };
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
// e um recurso do generics, utilizado para dizer que algum paramentro de uma funcao, por exemplo, e a chave de um objeto, que tambem e parametro da funcao
function getSomeKey(obj, key) {
    return `A chave ${String(key)} tem o valor ${obj[key]}`;
}
const server = {
    hd: '500gb',
    ram: '16gb',
};
console.log(getSomeKey(server, 'hd'));
