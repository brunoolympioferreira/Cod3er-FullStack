// Função é um bloco de codigo; esse bloco tem um nome; para que eu possa chamar esse bloco quantas vezes eu quiser
// Recebe um parametro de entrada ou não, depende da requisição

//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma('Bruno', ' Ferreira')
imprimirSoma(2 , 10, 4, 5, 6) // vai chamar somente os dois primeiros parametros (a,b)
imprimirSoma()

// Função com Retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
