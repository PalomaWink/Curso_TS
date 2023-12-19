// Decorators podem adicionar funcionalidades extras a classes e funcoes, sem precisar alterar o codigo fonte original
// Criamos novas funcoes que sao adicionadas a partir de um @nomeDaFuncao
// ele e uma funcao que retorna outra funcao

// Primeiro decorator
// Ele pode trabalhar com argumentos especiais que sao target, propertyKey e descriptor
// target: referencia a classe que esta sendo decorada
// propertyKey: referencia a propriedade ou metodo que esta sendo decorado
// descriptor: referencia a propriedade que esta sendo decorada
function myDecorator() {
  console.log("Iniciando decorator!");
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Decorator executado!");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log("terminando execucao do metodo");
  }
}

const myObj = new myClass();
// myObj.testing();

// Multiplos decorators
// Podemos utilizar multiplos decorators em TS, o primeiro a ser executado e o que esta mais proximo do metodo (o ultimo a ser feito);
function a() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Decorator a");
  }
}

function b() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Decorator b");
  }
}

class MultipleDecorators {
  @a()
  @b()
  @myDecorator()
  testing() {
    console.log("terminando execucao do metodo");
  }
}

// Decorators de classe
// ele esta ligado ao constructor;
// ou seja, sempre que este for executado, teremos a execucao do decorator, o que permite acrescentar algo na criacao das classes

// 3- class decorator
function classDecorator(constructor: Function) {
    console.log("Decorator de classe");
    console.log(constructor);
}

@classDecorator
class User {
  name
  constructor(name: string) {
    this.name = name;
  }
}

const paloma = new User("Paloma");
console.log(paloma);

// Decoretor de metodo
// ele e executado antes do metodo ser executado e com este decorator podemos modificar a execucao de metodos

// 2- method decorator
function enumerable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}

class Machine {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  showName() {
    return `O nome da maquina e ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator);


// Accessor decorator
// semelhante ao decorator de metodo, porem serve apenas para os getters e setters
// e com isso podemos alterar a execucao de um set ou get

// 5 - accessor decorator
class Monster {
  name?
  age?
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get showName() {
    return `O nome do monstro e ${this.name}`;
  }

  @enumerable(true)
  get showAge() {
    return `A idade do monstro e ${this.age}`;
  }
}

const monster = new Monster("Godzilla", 10000);
console.log(monster);

// Property decorator
// ele e executado antes da propriedade ser criada, o que nos ajuda a modificar ou validar algum valor

// 6 - property decorator
function formaterNumber() {
  return function(target: any, propertyKey: string) {
    let value: string;
    const getter = function() {
      return value;
    }
    const setter = function(newValue: string) {
      value = newValue.padStart(5, "0");
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    });
  };
}

class ID {
  @formaterNumber()
  id;
  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("123456");

// 7 - Exemploi real com class decorator
function createdDate (created: Function) {
  created.prototype.createdDate = new Date();
}

// para que eu possa acessar essa propriedade eu apenas crio ela, e coloco como nao obrigatorio
// que o proprio decorator preenche ela
@createdDate
class Book {
  id;
  createdAt?: Date;
  constructor(id: string) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  constructor(id: string) {
    this.id = id;
  }
}

const newBook = new Book("123456");
const newPen = new Pen("123456");

console.log(newBook);
console.log(newPen);

// 8 - Exemplo real com method decorator
function checkIfUserPosted() {
  return function(target: any, key: string | symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function(...args: any[]) {
      if (args[1] === true) {
        console.log("Usuario ja postou");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    }
    return descriptor;
  }

}
class Post {
  alreadyPosted = false;
  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(content);
  }
}

const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu segundo post", newPost.alreadyPosted);

// 9 - Exemplo real com property decorator
function Max(limit: number) {
  return function(target: any, propertyKey: string) {
    let value: string;
    const getter = function() {
      return value;
    }
    const setter = function(newValue: string) {
      if (newValue.length > limit) {
        console.log("Erro: Limite de caracteres excedido");
      } else {
        value = newValue;
      }
    }
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    });
    }
}

class Admin {
  @Max(10)
  userName: string;
  constructor(userName: string) {
    this.userName = userName;
  }
}

let allan = new Admin("Allan123hasuiahdaus456");
let lee = new Admin("Lee");