"use strict";
// Decorators podem adicionar funcionalidades extras a classes e funcoes, sem precisar alterar o codigo fonte original
// Criamos novas funcoes que sao adicionadas a partir de um @nomeDaFuncao
// ele e uma funcao que retorna outra funcao
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Primeiro decorator
// Ele pode trabalhar com argumentos especiais que sao target, propertyKey e descriptor
// target: referencia a classe que esta sendo decorada
// propertyKey: referencia a propriedade ou metodo que esta sendo decorado
// descriptor: referencia a propriedade que esta sendo decorada
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("Decorator executado!");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminando execucao do metodo");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
// myObj.testing();
// Multiplos decorators
// Podemos utilizar multiplos decorators em TS, o primeiro a ser executado e o que esta mais proximo do metodo (o ultimo a ser feito);
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Decorator a");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Decorator b");
    };
}
class MultipleDecorators {
    testing() {
        console.log("terminando execucao do metodo");
    }
}
__decorate([
    a(),
    b(),
    myDecorator()
], MultipleDecorators.prototype, "testing", null);
// Decorators de classe
// ele esta ligado ao constructor;
// ou seja, sempre que este for executado, teremos a execucao do decorator, o que permite acrescentar algo na criacao das classes
// 3- class decorator
function classDecorator(constructor) {
    console.log("Decorator de classe");
    console.log(constructor);
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const paloma = new User("Paloma");
console.log(paloma);
// Decoretor de metodo
// ele e executado antes do metodo ser executado e com este decorator podemos modificar a execucao de metodos
// 2- method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da maquina e ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator);
// Accessor decorator
// semelhante ao decorator de metodo, porem serve apenas para os getters e setters
// e com isso podemos alterar a execucao de um set ou get
// 5 - accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro e ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro e ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const monster = new Monster("Godzilla", 10000);
console.log(monster);
// Property decorator
// ele e executado antes da propriedade ser criada, o que nos ajuda a modificar ou validar algum valor
// 6 - property decorator
function formaterNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formaterNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("123456");
// 7 - Exemploi real com class decorator
function createdDate(created) {
    created.prototype.createdDate = new Date();
}
// para que eu possa acessar essa propriedade eu apenas crio ela, e coloco como nao obrigatorio
// que o proprio decorator preenche ela
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book("123456");
const newPen = new Pen("123456");
console.log(newBook);
console.log(newPen);
// 8 - Exemplo real com method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuario ja postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(content);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu segundo post", newPost.alreadyPosted);
// 9 - Exemplo real com property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log("Erro: Limite de caracteres excedido");
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(userName) {
        this.userName = userName;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "userName", void 0);
let allan = new Admin("Allan123hasuiahdaus456");
let lee = new Admin("Lee");
