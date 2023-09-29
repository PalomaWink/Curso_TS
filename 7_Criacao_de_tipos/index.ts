// 1 - Generics
// utilizamos generics quando uma funcao pode aceitar mais de um tipo

function showData<T>(data: T): string {
  return `O dado e: ${data}`;
}

console.log(showData<string>("Teste"));
console.log(showData<number>(123));
console.log(showData<boolean>(true));


// 2 - Restrições (constraints) em generics
// podemos restringir os tipos que a funcao pode aceitar

function showProductName<T extends {name: string}>(obj: T) {
  return `O nome do produto e: ${obj.name}`;
}

const myProduct = {name: "Produto 1", cor: 'branca'};
const myProduct2 = {cor: 'branca'};
const myProduct3 = {name: 123};

console.log(showProductName(myProduct));
// console.log(showProductName(myProduct2)); // nao compila
// console.log(showProductName(myProduct3)); tambem nao compila por que o name nao e string

// 3 - Generics com interfaces
// add genericts podemos aceitar tipos diferentes em ocasioes diferentes

interface MyObject<T, U> {
  name: string,
  wheels: T,
  engine: U
}

type Car = MyObject<number, number>;
type Pen = MyObject<boolean, boolean>;

const myCar: Car = {name: 'Carro', wheels: 4, engine: 1};
const myPen: Pen = {name: 'Caneta', wheels: true, engine: false};

console.log(myCar);
console.log(myPen);

// 4 - Type parameters
// e um recurso do generics, utilizado para dizer que algum paramentro de uma funcao, por exemplo, e a chave de um objeto, que tambem e parametro da funcao

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} tem o valor ${obj[key]}`;
}

const server = {
  hd: '500gb',
  ram: '16gb',
}

console.log(getSomeKey(server, 'hd'));


