const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
//menu.className += ' ativo'
menu.classList.remove('ativo');
menu.classList.toggle('ativo');


if(menu.classList.contains('ativo')){
  menu.classList.add('possui-azul');
} else if(menu.classList.contains('teste')){
  menu.classList.add('possui-teste');
} else{
  menu.classList.add('não-tem-nada');
}

console.log(menu.classList);

const animais = document.querySelector('.animais');

console.log(animais.attributes.id);

const img = document.querySelector('img');

img.setAttribute('alt', 'É uma raposa')

const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt);

console.log(img.getAttribute('alt'))

const animal = document.querySelector('.animais');

