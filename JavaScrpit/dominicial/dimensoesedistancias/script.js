const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;

const animaisTopo = listaAnimais.offsetTop;

const primeiroh2 = document.querySelector('h2');

const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();

console.log(rect);

console.log(
  window.innerWidth, 
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px');

if(small.matches){
  console.log('Tele menor que 600px')
} else {
  console.log('Tela maior que 600px')
}