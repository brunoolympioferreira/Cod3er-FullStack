const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Dessa maneira vai dar erro
// pessoa = { nome: 'Ana' }
// console.log(pessoa)

// Objeto foi congelado, nao tem com atribuir mais.
Object.freeze(pessoa)
pessoa.nome = 'Maria'

// Criei o objeto e ele nao podera mais ser modificado
const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)