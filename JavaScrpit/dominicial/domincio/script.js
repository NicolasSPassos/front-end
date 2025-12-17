const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/dominicial/domincio/index.html'){
  console.log('Igual')
} else { 
  console.log('Desigual')
}

const h1select = document.querySelector('h1');
const h1classe = h1select.classList;


function callback(){
  console.log('Clicou em', h1select.innerText);
}

h1select.addEventListener('click', callback);

