console.log(Number.isNaN(NaN))

console.log(Number.isInteger(2.7))

//integral verifica se o número é inteiro ou não

console.log(parseFloat('1234565432.3456789'))

//Retorna um número a partir de uma string

console.log(parseInt('120987893.88'))

//Retorna uma integral

const preco = 2.4678
console.log(preco.toFixed(2))

//Arredonda, podendo colocar quantas decimais quer adicionar

//toString faz o que o próprio noome já diz

let valor = 56.89
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(valor)

console.log(Math.abs(46-78));

//Retorna o valor absoluto

console.log(Math.ceil(8.3));

//Independente do caso, arredonda pra cima

console.log(Math.floor(4.99999));

//O contrário do anterior, sempre para baixo

console.log(Math.round(4.5));

//Só arredonda

console.log(Math.max(2,567,7889,99999))

//Retorna o maior e o min, o menor

const aleatorio = Math.round(Math.random()* (39 - 35 + 1)+35);

console.log(aleatorio)