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

//5 - Extending types -> Quando queremos extender uma interface, podemos usar a palavra extends (como uma heranca)

interface Human {
  name: string,
  age: number,
}

interface SuperHuman extends Human {
  powers: string[]
}

const paloma: Human = {
  name: 'Paloma',
  age: 28
}

const superman: SuperHuman = {
  name: 'Superman',
  age: 100,
  powers: ['Super forca', 'Visao de calor']
}

//6 - Intersection types -> Quando queremos juntar 2 ou mais interfaces, podemos usar a palavra &

interface Character {
  name: string,
}

interface Gun {
  type: string,
  caliber: number
}

type Soldier = Character & Gun

const arnold: Soldier = {
  name: 'Arnold',
  type: 'AK-47',
  caliber: 7.62
}

//7 - ReadonlyArray -> Quando queremos que um array seja somente leitura, podemos usar a palavra readonly
let myArray: ReadonlyArray<string> = ['mamao', 'banana', 'maca']

// myArray[0] = 10 -> nao permite alterar o valor do array

myArray.forEach((item) => {
  console.log(item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

// so e possivel alterar utilizando metodos (HOFS)

//8 - Tuplas -> Quando queremos definir um array com tipos diferentes, basicamente criamos um novo type, e nele
// inserimos um array com os tipos necessarios

type fiveNumber = [number, number, number, number, number];

const myNumberArray: fiveNumber = [1, 2, 3, 4, 5]

// da pra colocar uma string no meio

type fiveNumberString = [number, string, number, number, number];
const myNumberArrayString: fiveNumberString = [1, 'dois', 3, 4, 5];

// Nao da pra aumentar, nem diminuir o tamanho do array, e nem alterar os tipos

//9 - Tuplas com readonly -> Quando queremos que um array seja somente leitura, podemos usar a palavra readonly

function showNumbers(numbers: readonly [number, number, number]) {
  console.log(numbers)
}

showNumbers([1, 2, 3])