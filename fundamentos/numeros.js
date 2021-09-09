const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // está perguntando se a variável é um número inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log(media.toFixed(2)) //Função toFixed delimita a escolha de cadas decimais
console.log(media.toString())//Retornar o valor como uma String
console.log(media.toString(2)) // Converte em valor binário
console.log(typeof media) // Retorna o tipo de variável
console.log(typeof Number) // Number é uma função