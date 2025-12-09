// Crie uma função para verificar se um valor é Truthy

function istruee (dado){
  return !!dado
}

console.log(istruee(24));

// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado){
  return lado*4
}

console.log(perimetro(4));



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomecompleto (nome, sobrenome){
  return `${nome} ${sobrenome}` 
}

console.log(nomecompleto('Nicolas', 'Soares'))



// Crie uma função que verifica se um número é par

function par(numero){
  var modulo = numero % 2;
  if(modulo ===0){
    return true;
  } else {
    return false;
  }
}

console.log(par(3))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipodado(dado){
  return typeof dado
}

console.log(tipodado("srth"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener ('click', function (){
console.log('Nicolas Soares Passos')
});


// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
