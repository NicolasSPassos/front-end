//MANEIRA INCORRETA

/*const animal = {
  tamanho : 0,
  preco: 0,
}

const pinscher = animal;
pinscher.tamanho = 'Pequeno';
pinscher.preco = 2500;

const doberman = animal;
doberman.tamanho = 'Grande';
doberman.preco = 4000;*/

function Animal(tamanhoAtribuido, precoAtribuido){
  this.tamanho = tamanhoAtribuido;
  this.preco = precoAtribuido
}

const doberman = new Animal('Grande', 4000);
const pinscher = new Animal('Pequeno', 1500);

function Carro(marca, precoInicial){
const taxa = 1.2;
const precoFinal = precoInicial * taxa;

  this.marca = marca;
  this.preco = precoFinal
}

const mitsubishi = new Carro('Mitsubishi', 10000 )
