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

// 5 - Keyof Type Operator
// e um operador que retorna as chaves de um objeto

type Character = {
  name: string;
  age: number;
  hasDriverLicense: boolean;
}

type C = keyof Character;

function showCharName(obj: Character, name: C) { //ele vai fazer o link do name passado por parametro com o name do Character
  return `O nome do personagem e ${obj[name]}`;
}

const myChar: Character = {
  name: 'John',
  age: 25,
  hasDriverLicense: true,
}
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriverLicense'));

// 6 - Typeof Type Operator
// ele e baseado no tipo de algum dado
// e interessante para quando queremos criar uma vari[avel com o mesmo tipo de outra

const userName: string = 'John';
const userName2: typeof userName = 'John';
// const userName3: typeof userName = 14; -> nao compila

type x = typeof userName;
const userName4: x = 'Paloma';

// 7 - Index access types
// ele cria um tipo baseado em uma chave de objeto
// diferente do keyof, ele nao retorna todas as chaves, mas sim o tipo do dado de uma chave especifica

type Truck = {
  km: number;
  kg: number;
  description: string;
}

type km = Truck['km'];

const newTruck: Truck = {
  km: 1000,
  kg: 5000,
  description: 'Caminhao novo'
}

function showKm(Km: km) {
  return `O caminhao tem ${Km} km`;
}

showKm(newTruck.km); 

const newCar = {
  km: 5000,
  kg: 1000,
}

showKm(newCar.km); // tambem funciona com objetos que nao sao do tipo Truck
// diferente do keyof, que so funciona com objetos daquele tipo, esse metodo nos da mais liberdade, por que basta que tenha uma chave com aquele tipo

// 8 - Conditional Expressions Type
// permite criar tipos com base em condicoes (if, else)

interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myTyoe = B extends A ? string : number; // se B extender A, entao myType sera string, se nao, sera number

const someVar: myTyoe = 'Teste';
// const someVar2: myTyoe = 123; -> Nao aceita numero por que e uma string

type myTypeB = Teste extends {showNumber(): number} ? string : boolean; // se Teste extender showNumber, entao myTypeB sera string, se nao, sera boolean

// 9 - Template Literal Types
// permite criar tipos baseados em template literals

type testeA = 'text'

type CustomType = `${testeA} 1`; // CustomType sera 'text 1'

type a1 = 'testando'
type a2 = 'testando2'
type a3 = `${a1} ${a2}`; // a3 sera 'testando testando2'
type a4 = `${a1}` | `${a2}` // a4 sera testando ou testando2