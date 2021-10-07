function CriarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('Notebook', 2199,99))
console.log(CriarProduto('Ipaf', 1199,99))