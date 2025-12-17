var concluiuocurso = true;

if(concluiuocurso) {
  console.log ('Concluiu');
} else{
  console.log('Não concluiu');
}

var possuimestrado = false;
var possuigraduacao = false;

if(possuimestrado){
  console.log('Possui graduação e mestrado');
}
else if (possuigraduacao){
  console.log('Possui graduação, mas não possui mestrado');
} else{
  console.log('Não possui nada');
}

var condicional = (5+5) && (5*9);
if (condicional){
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

var operadorou = (5*0) || (5+5) && (10-2);
console.log(operadorou);

var corfav = 'Vermelho'

switch (corfav) {
case 'Azul':
  console.log('Olhe para o céu')
  break;
case 'Amarelo':
  console.log('Olhe para o sol')
  break;
case 'Vermelho':
  console.log('Olhe para a rosa')
  break;
  default:
    console.log('Olhe para o chão')
}

// Verifique se a sua idade é maior do que a de algum parente

var idadenic = 17;
var idadevito = 21;

if (idadenic > idadevito) {
  console.log('É maior')
} else if (idadenic === idadevito){
  console.log('É igual')
} else{
  console.log('É menor')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log( !! nome, !!idade, !! possuiDoutorado, !! empregoFuturo,  !! dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if ( brasil > china){
  console.log('Brasil têm mais habitantes')
} else {
  console.log('Brasil têm menos habitantes')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

