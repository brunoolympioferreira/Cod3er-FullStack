const escola = "Cod3r"

console.log(escola.charAt(4)) // valor no indice 4
console.log(escola.charCodeAt(3)) // valor na tabela asc
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // Concatenando textos
console.log('Escola ' + escola + '!') // concatenando da mesma maneira
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(',')) // gera uma array com , como separador


