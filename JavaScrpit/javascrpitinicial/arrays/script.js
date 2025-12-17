

//var ultimo = videogames.pop();

//videogames.push('3DS');



 // var n = 0;
 // while (n <11){
    //console.log(n);
   // n++;}

 //for (var numero = 9; numero <= 10; numero++){
 // console.log(numero);}
 
var videogames = ['Switch', 'PS4', 'XBox', 'PSP'];

for (var i = 0; i < videogames.length; i ++){
console.log(videogames[i]);
if(videogames[i] === 'Switch'){
  break;
}
}

var frutas = ['banana', 'pera', 'kiwi', 'uva', 'manga'];

frutas.forEach(function(fruto, index){
console.log(fruto, index)
});