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

//2 - Propriedade opcional em interface

interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usu[ario tem o e-mail ${user.email}`);
  if (user.role) {
    console.log(`A funcao do usuario e: ${user.role}`); // Se nao faz essa validacao aparece na tela undefined para o usuario, por ser um valor opcional
  }
}

const u1: User = {
  email: 'teste@teste.com',
  role: 'Admin'
}

const u2: User = {
  email: 'teste@teste.com',
}

showUserDetails(u1)
showUserDetails(u2)

// 3 - Propriedades readonly

interface Car {
  brand: string
  readonly wheels: number // a palavra 'readonly' so permite que algo seja lido, nao pode ser alterado
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}

console.log(fusca);

// fusca.wheels = 5 -> aparce o seguinte erro 'Não é possível atribuir a 'wheels' porque é uma propriedade de somente leitura.'
fusca.brand = 'Chevrolet' // aceita de boas

//4 - Index signature -> Quando nao sabemos o nome das chaves, mas ja sabemos quais os tipos de um objeto ou array
// da pra usar a palavra index ou key
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 15