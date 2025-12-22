// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraimg = document.querySelector('img');

const distanciatop = primeiraimg.offsetTop;

console.log(distanciatop);

// Retorne a soma da largura de todas as imagens


function somaimagens(){
const imagensAll = document.querySelectorAll('img');
let soma = 0
imagensAll.forEach((imagem)=>{
soma += imagem.offsetWidth
});
console.log(soma)
}

window.onload = function (){
  somaimagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link)=>{

  const larguraLinks = links.offsetWidth;
  const alturaLinks = links.offsetHeight;

  if(larguraLinks >= 48 && alturaLinks >= 48 ){
    console.log('Recomendado')
  } else {
    console.log('Não recomendado')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menor = window.matchMedia('(max-width: 720px').matches;

if (menor){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

