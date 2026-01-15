// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nomeAt, sobrenomeAt, idadeAt){
this.nome = nomeAt;
this.sobrenome = sobrenomeAt;
this.idade = idadeAt;
}

Pessoa.prototype.nomeCompleto = function(){
  console.log(`${this.nome} ${this.sobrenome}`)
}

const pessoa1 = new Pessoa('João', 'Barros', 32)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; //number
li.hidden; // Boolean
li.offsetLeft; //number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
