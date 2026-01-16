const alimento = 'Doce'
const bebida = new String('Refrigerante');

console.log(bebida[bebida.length - 12])
console.log(bebida.charAt(0))

//charAt = cacacter em...

const frase = 'Tentando ver '
const frase2 = 'se funciona'
const finalFrase = frase.concat(frase2)

console.log(finalFrase)

//concat = "soma de strings"

const fruta = 'Maçã';
const listaFrutas = 'Melão, Uva, Pera, Maçã';

console.log(listaFrutas.includes(fruta, 18));

//Includes = procura se existe
console.log(fruta.startsWith('Ma'));

//starsWith and endWith = começa com e termina com

const test1 = 'Alguma coisa'
const teste2 = 'Alguma coisa again'
const teste3 = 'Último alguma coisa'

console.log(teste2.slice(0,4))

//slice = corta até onde o user quiser

console.log(fruta.indexOf('çã'))

//indexof e lastIndexof = retorna qual é o length e o outro...

const listaPreco = ['R$ 99,00', 'R$ 199,000', 'R$ 299,00']

listaPreco.forEach((item) =>{
console.log(item.padStart(15, '.'));
});


//pedStar e pedEnd = adiciona caracteres um no começo e o outro...

const fraseRept = 'Blz';

console.log(fraseRept.repeat(5))

//Nem preciso dizer

let itensLista = 'Camissas Bonés Calças Bermudas Vestidos Saias';
itensLista = itensLista.replace(/[ ]+/g, ', ')

//A regular expression será apresentada depois, mas a lógica se nantém a mesma, o que quer mudar e pelo que mudar

let valor = 'R$ 1200,43';
valor = valor.replace(',', '.')

const arrayLista = itensLista.split(', ');

console.log(arrayLista)

// O split quebra uma lista - seguindo o padrão apresentado - e a transforma em uma array

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

const sexo1 = 'Feminino';
const sexo2 = 'FEMININO';
const sexo3 = 'Feminino';

console.log(sexo1.toUpperCase() === 'FEMININO');

const valorEspaco = '     R$23,00     '
valorEspaco.trim();

//remove os espaço, tendo também o Start e o End