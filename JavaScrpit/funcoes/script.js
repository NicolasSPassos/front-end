function areaQuadrado(lado){
  return lado**2;
}

console.log(areaQuadrado(10));

function pi(){
  return  3.14;
}

var total = 5*pi();
console.log (total)

function imc(peso, altura){
  var imc = peso / (altura**2)
  return imc;
}

console.log (imc (87, 1.82));

function corFavorita(cor) {
if (cor === 'vermelho') {
  return 'Eu gosto de maçã';
} else if (cor === 'amarelo') {
  return 'Eu gosto do sol';
} else {
  return 'Eu não gosto de cores';
 }
}  

addEventListener('click', function(){
  console.log('Oi')
});
 
function terceiraidade (idade){
  if (typeof idade !== 'number'){
return 'Informe sua idade!';
} else if (idade >= 60){
  return true;
} else{
  return false;
}
  }

  console.log (terceiraidade('oi'))

  function paisesfaltam(paisesquefui){
var paises = 193;
return `Faltam visitar ${paises - paisesquefui} países`
  }