const animais = ['Gato', 'Cão', 'Pato'];

const valores = [49, 59, 69, 79];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

console.log(dados[1][2].preco)

const objetos = new Array('Maca', 'Cama', 'Faca');

objetos[0] = 'Sofa'
objetos[4] = 'Taco'

console.log(objetos.length)

//length conta os itens

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

//Array.from transforma em uma Array

console.log(Array.isArray(arrayLi))

//Array.isArray verfica se é uma array

console.log(Array.of(20))

//Criou uma array exatamente com o valor passado, no entanto, se fizer isso no new Array ou no Array, retorna uma array com 10 itens vazios

console.log(Array(10))

const instrumentos = ['Guitarra', 'Violão', 'Viola']

console.log(instrumentos.sort())

const idades = [1, 23, 321, 345, 192]

console.log(idades.sort())

//Esse sort altera a "ordem" estabelecidade, só que de maneira alfabética ou pelo alinhamento de números 

const carros = ['Ford', 'Kia', 'Honda'];
carros.unshift('Chevrolet', 'VW')

console.log(carros)

carros.push('Mitsubishi', 'Fiat')

console.log(carros)

//unshift adiciona itens no começo da array e push no final dela

const primeiroItem = carros.shift()

console.log(primeiroItem)

const ultimoItem = carros.pop()

console.log(ultimoItem)

console.log(carros)

//Shift REMOVE o primeiro e pop REMOVE o último

console.log(carros.reverse())

//Inverte a ordem

const frutas = ['Maçã', 'Uva', 'Pera']
frutas.splice(1, 0, 'Jaca', 'Toranja')

console.log(frutas)

carros.splice(1,2, 'Ferrari')

console.log(carros)

//O primeiro valor significa da onde começa, o segundo, quantos itens apagar e o terceiro o que quer adicionar

const itens = ['Item0', 'Item1', 'Item2', 'Item3', 'Item4']
itens.copyWithin(2,0,4)

console.log(itens)

//O primeiro critério é de onde começa, o segundo e o tercerio do que até o que, copiando o que estiver no intervalo estabelecido

frutas.fill('Jabuticaba', 1,3)

console.log(frutas)

//Preenche a array com o valor passado

const objetos1 = ['Cama', 'Sofa'];
const objetos2 = ['Faca', 'Maca'];

const objetos3 = [].concat(objetos1, objetos2, 'Teste')

console.log(objetos3)

//Ele junta as arrays, além de possibilitar a inserção de algo. TEM QUE PASSAR OS [] - NESTE CASO -


console.log(frutas.includes('Jabuticaba'));

console.log(objetos3.indexOf('Teste'));

console.log(objetos3.lastIndexOf('Faca'));

//O primeiro verifica se tem, o segundo a posição - se tiver - e o tercerio, o mesmo que o segundo, apenas começa pelo final

const linguagens = ['Java', 'JavaScript', 'Python', 'PHP']

//linguagens.join: JUnta tudo

console.log(linguagens.join(', '))

//Junta, podendo adicionar coisas, até outras variáveis

console.log(linguagens.slice(2))

//Corta e retorna a partir do que foi informado - pode ser usado para "clonar" a array