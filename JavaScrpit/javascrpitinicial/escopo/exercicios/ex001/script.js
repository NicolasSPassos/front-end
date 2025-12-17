// Por qual motivo o código abaixo retorna com erros? Devido ao const e o let se manterem no bloco

  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;

console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(3));
console.log(dividirDois(4));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
