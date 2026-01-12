/*const DOM = {
  seletor: 'li',
  element(){
    return document.querySelector(this.seletor);
  },
  ativar(){
     this.element().classList.add('Ativo')
  }
}*/

function Dom(seletor) {
 this.element = function(){
    return document.querySelector(seletor);
  },
  this.ativar = function(classe){
     this.element().classList.add(classe)
  }
}

const li = new Dom('li');
const lastLi = new Dom('li:last-child');

const ul = new Dom('ul');

ul.ativar('Teste');