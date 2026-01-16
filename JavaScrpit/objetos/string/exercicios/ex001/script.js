// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let RecebimentoTotal = 0;

transacoes.forEach((item) =>{

const numeroLimpo = +item.valor.replace('R$', '')

if (item.descricao.slice(0,4) === 'Taxa'){
taxaTotal += numeroLimpo
} else {
RecebimentoTotal += numeroLimpo
}
});

console.log(taxaTotal);
console.log(RecebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayLista = transportes.split(';')
console.log(arrayLista)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

              
const spanToA = html.split('span').join('a')
console.log(spanToA);
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(13))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalDasTaxas = 0;
transacoes2.forEach((item)=>{
  item = item.toLocaleLowerCase();
  item = item.trim();
  item = item.slice(0, 4);

if (item === "taxa")  
  totalDasTaxas++
})
console.log(totalDasTaxas)