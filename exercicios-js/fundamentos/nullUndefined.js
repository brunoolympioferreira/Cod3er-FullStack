let valor // nao inicializada >> valor undefined
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!, a variavel nao aponta para nenhum objeto

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50 // estou atribuindo 3.5 ao objeto preco que estava vazio
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // false >> valor nulo
console.log(produto) // objeto nulo
