type Pessoa = {
  nome: string,
  idade: number,
  telefone: number,
  endereco: string
};

const retornaDadosPessoais = (pessoa: Pessoa): object => {
  return { nome: pessoa.nome, idade: pessoa.idade, telefone: pessoa.telefone, endereco: pessoa.endereco }
};

retornaDadosPessoais({
  nome: 'laura',
  idade: 26,
  telefone: 997957214,
  endereco: 'São José dos Campos'
})

//forme explicita, neste caso nossa variavel esta com tipagem forte, só pode boolean 
let ligado: boolean = true

//forma por inferencia, nesse caso podemos mudar o valor para qualquer coisa
let desligado = false

let especial: any = ''

// dessa forma não temos previsibilidade das propriedades do objeto
// ainda que a variavel só aceite objetos
let objeto: object = {
  nome: 'laura',
  idade: 26
}

// esse é o caso de um objeto tipado com previsibilidade de suas propriedades
type Pessoa2 = {
  nome: string,
  idade: number,
  endereco: string
}

let serHumano: Pessoa2 = {
  nome: 'laura',
  idade: 26,
  endereco: 'SJC'
}


let dados: string[] = ['laura', 'ronald', 'cookie']
let dadinhos: Array<number> = [26, 22, 7]

let comidas: string[][] = [['arroz'], ['feijão'], ['carne']]
let valores: Array<Array<number>> = [[22], [30], [50]]

let pessoa: (string | number)[] = ['laura', 26]

let minhaGata: (string | boolean | number)[] = ['cookie maria', 7, true]

let endereco: [string, number, number, string] = ['Rua Pimenteiras', 140, 1223750, 'São José dos Campos']


function soma(x: number, y: number) {
  return x + y
}

let resultado2 = soma(3, 4)


const dadosPessoais = (endereco: string | number, nome: string | boolean): string | number | boolean => {
  return endereco

}

// classes, subclasses e métodos modificadores
// exemplo 1
class Animal {
  public nome: string;
  private idade: number;
  protected tipo: string;

  constructor(nome: string, idade: number, tipo: string) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  public fazerBarulho(): void {
    console.log(`O ${this.tipo} ${this.nome} está fazendo barulho.`);
  }

  private calcularIdadeEmMeses(): number {
    return this.idade * 12;
  }

  protected exibirIdadeEmMeses(): void {
    const idadeMeses = this.calcularIdadeEmMeses();
    console.log(`A idade de ${this.nome} em meses é ${idadeMeses}.`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, 'Cachorro');
  }

  public latir(): void {
    console.log(`${this.nome} está latindo.`);
  }

  public exibirIdade(): void {
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
  protected nome?: string;
  readonly poder: number;
  forca: number

  constructor(nome: string, poder: number, forca: number) {
    this.nome = nome,
      this.poder = poder,
      this.forca = forca
  }

  ataque(): void {
    console.log(`Ataque com ${this.poder} pontos`)
  }
}

class Mago extends Personagem {
  pontosDeMagia: number;
  constructor(nome: string, poder: number, forca: number, pontosDeMagia: number) {
    super(nome, poder, forca) // classe pai
    this.pontosDeMagia = pontosDeMagia
  }
}

const personagem1 = new Personagem('Skala', 10, 98)
personagem1.forca = 12
personagem1.ataque()

const personagem2 = new Mago('Mago', 9, 30, 100)



// funções com any e funções generics 
const concatArraysAny = (...itens: any[]): any[] => {
  return new Array().concat(...itens)
}

const numArraysAny = concatArraysAny([1, 2, 4], [5])
const stringArrayAny = concatArraysAny(['laura'], ['ronald'])

console.log(numArraysAny)
console.log(stringArrayAny)

function concatArrays<T>(...items: T[]): T[] {
  return ([] as T[]).concat(...items);
}

const numArrays = concatArrays<number[]>([1, 2, 4], [5]);
const stringArray = concatArrays<string[]>(['laura'], ['ronald']);

console.log(numArrays);
console.log(stringArray);

// class com generic
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

const box = new Box<string>('Hello');
console.log(box.getItem()); // Saída: "Hello"


//Decorators

// Definindo o decorator
function logDecorator(target: any, key: string) {
  console.log('chamou o decorator')
  console.log(`Método:  ${key}  chamado`);
  console.log('Target', target)
}

// Usando o decorator
class MinhaClasse {
  @logDecorator
  meuMetodo() {
    console.log("Executando meu método");
  }
}

// Criando uma instância da classe
const instancia = new MinhaClasse();

// Chamando o método decorado
instancia.meuMetodo();

// attributes decorator 

function minLength(length: number) {
  return (target: any, key: string) => {
    let value = target[key]

    const getter = () => value // metodo de leitura da variavel 
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`)
      } else value = value
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Api {
  @minLength(3)
  name: string;
  constructor(name: string) {
    this.name = name
  }
}

const api = new Api('produto')


