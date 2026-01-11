function iniTabNav(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');

const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo')

if (tabMenu.length && tabContent){


function ativarTab(index){
  tabContent.forEach((section)=>{
section.classList.remove('ativo')
  });
  tabContent[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index)=>{
itemMenu.addEventListener('click', ()=>{
  ativarTab(index)
})
});
 }
}
iniTabNav();

function iniAccordion(){

const accordionLista = document.querySelectorAll('.js-accordion dt')

const classeAtivo = 'ativo';

if(accordionLista.length){

accordionLista[0].classList.add(classeAtivo)
accordionLista[0].nextElementSibling.classList.add(classeAtivo)


function ativarAccordion(){
  this.classList.toggle(classeAtivo)
  (this.nextElementSibling.classList.toggle(classeAtivo))
}


accordionLista.forEach((item) =>{
item.addEventListener('click', ativarAccordion )
});
}
}

iniAccordion();