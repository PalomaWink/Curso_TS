// 1 - tipo de objeto para funcao com interface

interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(`o nome do produto e ${product.name} e seu preco e R${product.price}`);
  if (product.isAvailable) {
    console.log("o produto esta disponivel");
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)