function Cachorro(racaAt, porteAt){
this.raca = racaAt;
this.porte = porteAt
}

Cachorro.prototype.andar = function(){
  return `${this.raca} andou`;
}

const toddy = new Cachorro('Pinscher', 'Pequeno')

const pais = 'China';
const cidade = new String('Pequim')

const listaCarros = ['Honda', 'Chevrolet', 'Fiat']

const lista = document.querySelectorAll('li');

const listaAarrayA = Array.from(lista);
//Jeito antigo, possuindo propriedades diferentes
const listaArrayB = Array.prototype.slice.call(lista);

const Carro = {
  marca: 'Ford',
  preco: 50000,
  andar(){
    return true;
  }
}