"use strict";
// 1 - Campos em classe
// a ! diz pro TS que eu vou usar essa variável, mas não vou inicializar ela agora
class User {
}
const paloma = new User();
// se eu nao fizer essa atribuicao a classe nao recebe os valores
console.log(paloma.name = 'Paloma');
// 2 - Construtor em classe
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const allan = new NewUser('Allan', 30);
console.log(allan);
// 3 - campo readonly
class Car {
    // Quando eu uso a propriedade readonly eu não preciso passar ela no construtor
    // Ja que ela tera o papel apenas da leitura
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const ferrari = new Car('Ferrari');
console.log(ferrari.wheels);
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const terminator = new KillerMachine('Terminator', 2);
console.log(terminator);
// 5 - Metodos em classes
// sao as funcoes da classe e é uma maneira de adicionar funcionalidade as classes
class Dwarf {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    greeting() {
        console.log("Hey stranger!");
    }
}
const gimli = new Dwarf('Gimli', 1.5);
console.log(gimli.greeting());
// 6 - o this
// o this é uma referencia a propria classe e com isso podemos acessar as proprias propriedades e metodos
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhao do modelo: ${this.model} e com ${this.hp} cavalos de potencia`);
    }
}
const volvo = new Truck('FH', 500);
console.log(volvo.showDetails());
// 7 - getters
// sao uma forma de retornar propriedades do objeto, mas podemos modifica-las no retorno
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const palomaWink = new Person('Paloma', 'Wink');
console.log(palomaWink.fullName);
// 8 - setters
// os setters modificam/atribuem valores das propriedades do objeto
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('x inserido com sucesso');
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('y inserido com sucesso');
    }
    get coords() {
        return `${this.x} ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 10;
myCoords.filly = 20;
console.log(myCoords);
class blogPosts {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o titulo do post e: ${this.title}`;
    }
}
const myPost = new blogPosts('Hello World');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o titulo do post e: ${this.title}`;
    }
}
// 10 - Override de metodos
// Podemos sobrescrever os metodos das classes herdadas, em POO e chamado de Polimorfismo
class Base {
    someMethod() {
        console.log("Hey, I'm the base method");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Fui alterado!");
    }
}
const nova = new Nova();
console.log(nova.someMethod());
// 11 - Visibilidade de metodos e propriedades
// Public, Private e Protected
// Public é o padrão, é o que permite que todos os metodos e propriedades sejam acessados fora da classe
// Private não permite que os metodos e propriedades sejam acessados fora da classe
// Protected permite que os metodos e propriedades sejam acessados dentro da classe e nas classes que herdam dela
class BaseClass {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    // so consigo acessa aqui por que e privado
    showAge() {
        console.log(this.age);
    }
    showHeight() {
        console.log(this.height);
    }
}
const baseClass = new BaseClass('Paloma', 30, 1.65);
console.log(baseClass.name);
// console.log(baseClass.age); nao consigo acessar pq é private
// console.log(baseClass.height); nao consigo acessar pq é protected
class D extends BaseClass {
    // consigo acessar pq é protected, ou seja, pode ser acessado apenas por quem herda da classe
    // e apenas e acessado atraves de um metodo
    showHeight() {
        console.log(this.height);
    }
}
const d = new D('Paloma', 30, 1.65);
console.log(d.showAge());
// 12 - static members
// criar proriedades e metodos estaticos em classes faz com que o acesso ou a utilizacao nao dependam de objetos
// podemos utiliza-los a partir da propria classe
class StaticMembers {
    // serve para funcoes tambem
    static showProp() {
        console.log(StaticMembers.prop);
    }
}
// consegui acessar sem instanciar a classe e sem precisar criar um objeto
StaticMembers.prop = "Static member";
console.log(StaticMembers.showProp());
console.log(StaticMembers.prop);
// 13 - Generic classes
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
// Por se tratar de genericos eu posso passar qualquer tipo de valor
const item1 = new Item(1, 'Paloma');
const item2 = new Item('Paloma', 1);
// 14 - Parameters properties
// Podemos criar propriedades a partir dos parametros do construtor, resumindo um pouco a sintaxe
class ParametersProperties {
    constructor(name, qtd, price) {
        this.name = name;
        this.qtd = qtd;
        this.price = price;
        this.name = name;
        this.qtd = qtd;
        this.price = price;
    }
}
const newShirt = new ParametersProperties('Camiseta', 1, 20);
console.log(newShirt);
// 15 - Class Expression
// Podemos criar classes anonimas, ou seja, sem nome, e atribuir a uma variavel
const ClassExpression = class {
    constructor(name) {
        this.name = name;
    }
};
const classExpression = new ClassExpression('Paloma');
// 16 - Abstract classes
// São classes que não podem ser instanciadas, mas podem ser herdadas
// São utilizadas para criar classes que servirão de base para outras classes
// Tambem nao podemos instanciar objetos a partir destas classes (elas sao bem travadas)
// Lembra muito as interfaces, mas com a diferenca de que podemos ter metodos implementados
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
// 17 - Relacao entre as classes
// Podemos criar relacoes entre as classes, como por exemplo, uma classe que depende de outra
// Quando as classes sao identicas o TS nao reclama, mas quando sao diferentes ele reclama
class Dog {
}
class Cat {
}
const doguinho = new Cat();
