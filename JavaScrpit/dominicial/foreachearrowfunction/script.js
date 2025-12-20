const imgs = document.querySelectorAll('img');


imgs.forEach(function(item, index, array){
//console.log(item, index, array)
});

imgs.forEach((item) =>{
 console.log(item);
});

const titulos = document.getElementsByClassName('titulo');

const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
//console.log(item);
});
