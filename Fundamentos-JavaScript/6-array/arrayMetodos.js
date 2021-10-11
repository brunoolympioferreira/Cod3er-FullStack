const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Remove um item no ultimo elemento
pilotos.pop() // massa quebrou o carro! >> remove o ultimo elemento da lista
console.log(pilotos)

// push - adiciona um item no ultimo elemento
pilotos.push('Verstappen')
console.log(pilotos)

// shift - remove o primeiro elemento da lista
pilotos.shift()
console.log(pilotos)

//unshift - adiciona um item no primeiro elemento da lista
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover

//adiconar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

//Gera um novo array a partir do indice requerido
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)