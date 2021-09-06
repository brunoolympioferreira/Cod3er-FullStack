const valores = [7.7,8.9,6.3,9.2] // criando um array
console.log(valores[0], valores[3])
console.log(valores[4]) // Undefined

valores[4] = 10 // adiciona 10 ao indice 4
console.log(valores)
console.log(valores.length) // quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste') // Adiciona valores na array
console.log(valores)

console.log(valores.pop()) // elimina o ultimo valor desse array
delete valores[0] // Deleta o elemento do indice 0
console.log(valores)

console.log(typeof valores) // tipo object