"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const retornaDadosPessoais = (pessoa) => {
    return { nome: pessoa.nome, idade: pessoa.idade, telefone: pessoa.telefone, endereco: pessoa.endereco };
};
retornaDadosPessoais({
    nome: 'laura',
    idade: 26,
    telefone: 997957214,
    endereco: 'São José dos Campos'
});
//forme explicita, neste caso nossa variavel esta com tipagem forte, só pode boolean 
let ligado = true;
//forma por inferencia, nesse caso podemos mudar o valor para qualquer coisa
let desligado = false;
let especial = '';
// dessa forma não temos previsibilidade das propriedades do objeto
// ainda que a variavel só aceite objetos
let objeto = {
    nome: 'laura',
    idade: 26
};
let serHumano = {
    nome: 'laura',
    idade: 26,
    endereco: 'SJC'
};
let dados = ['laura', 'ronald', 'cookie'];
let dadinhos = [26, 22, 7];
let comidas = [['arroz'], ['feijão'], ['carne']];
let valores = [[22], [30], [50]];
let pessoa = ['laura', 26];
let minhaGata = ['cookie maria', 7, true];
let endereco = ['Rua Pimenteiras', 140, 1223750, 'São José dos Campos'];
function soma(x, y) {
    return x + y;
}
let resultado2 = soma(3, 4);
const dadosPessoais = (endereco, nome) => {
    return endereco;
};
// classes, subclasses e métodos modificadores
// exemplo 1
class Animal {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    fazerBarulho() {
        console.log(`O ${this.tipo} ${this.nome} está fazendo barulho.`);
    }
    calcularIdadeEmMeses() {
        return this.idade * 12;
    }
    exibirIdadeEmMeses() {
        const idadeMeses = this.calcularIdadeEmMeses();
        console.log(`A idade de ${this.nome} em meses é ${idadeMeses}.`);
    }
}
class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'Cachorro');
    }
    latir() {
        console.log(`${this.nome} está latindo.`);
    }
    exibirIdade() {
        // Acesso ao membro protected da classe pai
        this.exibirIdadeEmMeses();
    }
}
const animal = new Animal('Animal', 5, 'Desconhecido');
console.log(animal.nome); // Acesso permitido (membro public)
// console.log(animal.idade); // Erro: Acesso negado (membro private)
// console.log(animal.tipo); // Erro: Acesso negado (membro protected)
animal.fazerBarulho(); // O Desconhecido Animal está fazendo barulho.
const cachorro = new Cachorro('Bob', 3);
console.log(cachorro.nome); // Acesso permitido (membro public)
// console.log(cachorro.idade); // Erro: Acesso negado (membro private)
// console.log(cachorro.tipo); // Erro: Acesso negado (membro protected)
cachorro.fazerBarulho(); // O Cachorro Bob está fazendo barulho.
cachorro.latir(); // Bob está latindo.
cachorro.exibirIdade(); // A idade de Bob em meses é 36.
// exemplo 2
class Personagem {
    constructor(nome, poder, forca) {
        this.nome = nome,
            this.poder = poder,
            this.forca = forca;
    }
    ataque() {
        console.log(`Ataque com ${this.poder} pontos`);
    }
}
class Mago extends Personagem {
    constructor(nome, poder, forca, pontosDeMagia) {
        super(nome, poder, forca); // classe pai
        this.pontosDeMagia = pontosDeMagia;
    }
}
const personagem1 = new Personagem('Skala', 10, 98);
personagem1.forca = 12;
personagem1.ataque();
const personagem2 = new Mago('Mago', 9, 30, 100);
// funções com any e funções generics 
const concatArraysAny = (...itens) => {
    return new Array().concat(...itens);
};
const numArraysAny = concatArraysAny([1, 2, 4], [5]);
const stringArrayAny = concatArraysAny(['laura'], ['ronald']);
console.log(numArraysAny);
console.log(stringArrayAny);
function concatArrays(...items) {
    return [].concat(...items);
}
const numArrays = concatArrays([1, 2, 4], [5]);
const stringArray = concatArrays(['laura'], ['ronald']);
console.log(numArrays);
console.log(stringArray);
// class com generic
class Box {
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
}
const box = new Box('Hello');
console.log(box.getItem()); // Saída: "Hello"
//Decorators
// Definindo o decorator
function logDecorator(target, key) {
    console.log('chamou o decorator');
    console.log(`Método:  ${key}  chamado`);
    console.log('Target', target);
}
// Usando o decorator
class MinhaClasse {
    meuMetodo() {
        console.log("Executando meu método");
    }
}
__decorate([
    logDecorator
], MinhaClasse.prototype, "meuMetodo", null);
// Criando uma instância da classe
const instancia = new MinhaClasse();
// Chamando o método decorado
instancia.meuMetodo();
// attributes decorator 
function minLength(length) {
    return (target, key) => {
        let value = target[key];
        const getter = () => value; // metodo de leitura da variavel 
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            else
                value = value;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Api {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    minLength(3)
], Api.prototype, "name", void 0);
const api = new Api('produto');
