var pessoa = {
  nome: 'Nicolas',
  idade : 17,
}

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado**2
  } ,
  perimetro: function(lado){
    return this.lados*lado
  } ,
}


console.log(quadrado.area(5));
console.log(quadrado.perimetro(5))

var menu = {
  width : 800,
  height: 45,
  backgroundColor: '#84E',
  metadeheight(){
    return this.height/2;
  },
}

menu.color = 'blue';

menu.hasOw

var bg = menu.backgroundColor



//EXERCÍCIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var Eu = {
  nome: 'Nicolas',
  sobrenome: 'Soares',
  idade: 17,
  nomecompleto: function(){
    return `${this.nome} ${this.sobrenome}`
  },
}

console.log(Eu.nomecompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'Homem'){
      return 'Latir'
    }
    else{
      return 'Não latir';
    }
  } 
}

console.log(cachorro.latir('Criança'));



