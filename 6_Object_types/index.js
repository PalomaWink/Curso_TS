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
