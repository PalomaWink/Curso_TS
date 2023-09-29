"use strict";
// 1 - tipo de objeto para funcao com interface
function showProductDetails(product) {
    console.log(`o nome do produto e ${product.name} e seu preco e R${product.price}`);
    if (product.isAvailable) {
        console.log("o produto esta disponivel");
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usu[ario tem o e-mail ${user.email}`);
    if (user.role) {
        console.log(`A funcao do usuario e: ${user.role}`); // Se nao faz essa validacao aparece na tela undefined para o usuario, por ser um valor opcional
    }
}
const u1 = {
    email: 'teste@teste.com',
    role: 'Admin'
};
const u2 = {
    email: 'teste@teste.com',
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
// fusca.wheels = 5 -> aparce o seguinte erro 'Não é possível atribuir a 'wheels' porque é uma propriedade de somente leitura.'
fusca.brand = 'Chevrolet'; // aceita de boas
let coords = {
    x: 10
};
coords.y = 15;
const paloma = {
    name: 'Paloma',
    age: 28
};
const superman = {
    name: 'Superman',
    age: 100,
    powers: ['Super forca', 'Visao de calor']
};
const arnold = {
    name: 'Arnold',
    type: 'AK-47',
    caliber: 7.62
};
//7 - ReadonlyArray -> Quando queremos que um array seja somente leitura, podemos usar a palavra readonly
let myArray = ['mamao', 'banana', 'maca'];
// myArray[0] = 10 -> nao permite alterar o valor do array
myArray.forEach((item) => {
    console.log(item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
const myNumberArray = [1, 2, 3, 4, 5];
const myNumberArrayString = [1, 'dois', 3, 4, 5];
// Nao da pra aumentar, nem diminuir o tamanho do array, e nem alterar os tipos
//9 - Tuplas com readonly -> Quando queremos que um array seja somente leitura, podemos usar a palavra readonly
function showNumbers(numbers) {
    console.log(numbers);
}
showNumbers([1, 2, 3]);
