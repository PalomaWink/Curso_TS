// Apesar de criarmos os arquivos .ts, importamos como .js (apesar de não expecificar a extensão)
// Utilizaremos os Node.js para executar os arquivos com módulos

// exportamos assim quando temos mais do que uma função no meu arquivo
export function somar(x: number, y: number) {
  return x + y;
}

// Usamos assim quando temos apenas uma funcao no arquivo
export default function subtrair(x: number, y: number) {
  return x - y;
}

// Assim importamos quando temos mais do que uma funcao no meu arquivo
// import { somar } from "./somar";

// Assim importamos quando temos apenas uma funcao no arquivo
// import subtrair from "./subtrair";

// Para importar e exportar variavies é o mesmo esquema, mas precisamos usar o destructuring para importar
// export const nome = "Luiz";
// import { nome } from "./nome";

// Para mudar o nome de uma variavel na hora de importar, usamos o "as"
// import { nome as nome2 } from "./nome";

// Para importar tudo de uma vez, usamos o *, e os dados se tornam um objeto
// Esse tipo de importação necessita de um alias, por se tornar um objeto (chave: valor)
// import * as MeuModulo from "./nome";