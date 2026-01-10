const h1 = document.querySelector('h1');
const lista = document.querySelector('.animais-lista')

h1.innerHTML = '<p> Novo Texto';


console.log(h1.innerHTML);
console.log(h1.outerHTML);
//console.log(lista.innerHTML);

console.log(lista.parentElement.parentElement.parentElement);

console.log(lista.querySelector('li:last-child'))

console.log(lista.previousElementSibling);

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

const animais = document.querySelector('.animais');

const contato = document.querySelector('.contato');

const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');

contato.insertBefore(animais, mapa);

mapa.appendChild(novoH1);

const h1b = document.querySelector('h1');

const faq = document.querySelector('.faq');

const cloneH1 = h1b.cloneNode(true);

cloneH1.classList.add('azul')

faq.appendChild(cloneH1);