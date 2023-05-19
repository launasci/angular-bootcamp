// const preco = 5.90
// let consumo = 14 // pra cada 1L o carro faz 14 km
// let distancia = 360
// const totalGasto = parseInt(distancia / consumo * preco)

// console.log(`O gasto com essa viagem será de: r$ ${totalGasto} reais`)

// ------------

// const precoEtanol = 3.99 
// const precoGasolina = 6.70
// let combustivelCarro = 'gasolina'
// let consumo = 10 // para cada 1L o carro faz 10km
// let distancia = 300

// if (combustivelCarro !== 'gasolina' && 'etanol'){
//   console.log('Combustivel invalido')
// }else if (combustivelCarro === 'gasolina'){
//   const gastoGasolina = parseInt((distancia / consumo)*precoGasolina)
//   console.log(`O gasto com essa viagem será de: r$ ${gastoGasolina} reais`)
// }else if (combustivelCarro === 'etanol'){
//   const gastoEtanol = parseInt((distancia / consumo)*precoEtanol)
//   console.log(`O gasto com essa viagem será de: r$ ${gastoEtanol} reais`)
// }

// -----------------------

// notas = [10, 10, 7]

// const soma  =  (a, b, c) => (a + b + c) / 3
// const media = soma(...notas)

// if (media  < 5) console.log('reprovado, cria') 
// else if (media > 7) console.log('aprovado, menor') 
// else return console.log('vamos tentar de novo')

// ------------------------

// const dados = [90, 1.70]

// const calculaImc = (peso, altura) => {return  peso / (altura * altura) }
// const resultadoImc = calculaImc(...dados)
// if(resultadoImc < 18.5) console.log('vai se alimentar, anjo')
// else if(resultadoImc >= 18.5 && resultadoImc < 25) console.log('ta na capa, arrasou')
// else if(resultadoImc >= 25 && resultadoImc < 30) console.log('ta na hora de ir caminhar')
// else if(resultadoImc >= 30 && resultadoImc < 40) console.log('vc ja ouviu falar em musculação?')
// else console.log('dieta flexivel e exercicio melhora a qualdiade de vida')

// --------------------------

//  const valor = 100 
//  const pagamento = 4

// if(pagamento === 1){
//   desconto1 = valor - ((10/100) * valor)
//   console.log(desconto1)
// } else if (pagamento === 2) {
//   desconto2 = valor - ((15/100) * valor)
//   console.log(desconto2)
// } else if (pagamento ===3){
//   console.log(valor)
// } else console.log(valor + ((10/100) * valor))

// ----------------------------

// const valorHamburguer = parseFloat(10)
// const quantidadeHamburguer = parseInt(1)
// const valorBebida = parseFloat(10)
// const quantidadeBebida = parseInt(1)
// const valorPago = parseFloat(30)

// const valorTotal = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida)
// console.log(`O preço final do pedido é R$ ${valorTotal.toFixed(2)}. Seu troco é R$ ${(valorPago - valorTotal).toFixed(2)}.`)

// ----------------------------------

// const pedido = {
//   cliente: 'Laura',
//   endereco: 'Pimenteiras, 140',
//   itens: [],
//   taxaEntrega: 5.0
// };

// const quantidadeItens = parseInt(1);
// while (pedido.itens.length < quantidadeItens) {
//   const nomeItem = 'Salada';
//   const precoItem = 15;
//   pedido.itens.push({ nome: nomeItem, preco: precoItem });
// }
// let totalPedido = 0
// for (let item of pedido.itens) {
//   totalPedido += item.preco;
// }

// let valorFinal = totalPedido + pedido.taxaEntrega

// console.log(`Pedido: ${pedido.cliente}
// Endereço de entrega: ${pedido.endereco}
// Total: R$ ${valorFinal}`)

// -----------------------------------------

// class Carro {
//   marca;
//   cor;
//   gastoMedio;

//    constructor (marca, cor, gastoMedio){
//     this.marca = marca
//     this.cor = cor
//     this.gastoMedio = gastoMedio
//    }
// }

// const calculaGastoMedio = (obj, km, preco) => {
//   const gastoFinal = parseInt(km / carro1.gastoMedio * preco)
//     console.log(`O gasto médio para realizar essa viagem, no ${obj.marca}, é de ${gastoFinal.toFixed(2)} reais.`)
// }

// const carro1 = new Carro('Ford', 'Vermelho', 10)
// const carro2 = new Carro ('Prisma', 'Branco', 14)

// calculaGastoMedio(carro1, 100, 5.90)
// calculaGastoMedio(carro2, 280, 4.79)

// -------------------------
// const pedido = {
//   cliente: gets(),
//   endereco: gets(),
//   itens: [],
//   taxaEntrega: 5.0
// };

// const quantidadeItens = parseInt(gets());
// while (pedido.itens.length < quantidadeItens) {
//   const nomeItem = gets();
//   const precoItem = parseFloat(gets());
//   pedido.itens.push({ nome: nomeItem, preco: precoItem });
// }

// let totalPedido = 0
// for (let i = 0; i < pedido.itens.length; i++) {
//   totalPedido += pedido.itens[i].preco;
// }

// let valorFinal = totalPedido + pedido.taxaEntrega

// print("Pedido: " + pedido.cliente);
// print("Endereco de entrega: " + pedido.endereco);
// print("Total: R$ " + valorFinal.toFixed(2));

