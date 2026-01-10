const img = document.querySelector('img');

img.addEventListener('click',() =>{
console.log('Clicado')
});

//ou

const imagem2 = document.querySelector('#img2')

function callback(event){
  console.log(event);
}

imagem2.addEventListener('click', callback);

const imagemLista = document.querySelector('.animais-lista');

function callback2(event){
console.log(event.currentTarget);
console.log(event.target);
console.log(event.type);
}

imagemLista.addEventListener('click', callback2);

const linkExterno = document.querySelector('a[href^="https"]')

function link(event){
event.preventDefault();
console.log(this.getAttribute('href'));

}

linkExterno.addEventListener('click', link)

console.log(linkExterno);

const h1 = document.querySelector('h1');

function evento(){

console.log(event.type, event)

};

h1.addEventListener('click', evento);

h1.addEventListener('mouseenter', evento);

h1.addEventListener('mousemove', evento);

window.addEventListener('scroll', evento);

window.addEventListener('resize', evento);

window.addEventListener('keydown', evento);

function teclaEvento(event){
  if(event.key === 'f'){
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', teclaEvento)

const imgs = document.querySelectorAll('img');

function imgSrc(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc)
});