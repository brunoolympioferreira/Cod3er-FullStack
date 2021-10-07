/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function JurosSimples(capitalInicial, taxaJuros, tempApp) {
    const juros = capitalInicial * taxaJuros * tempApp
    const montante = capitalInicial + juros
    console.log(`Montante com Juros Simples: R$ ${montante}`)
}

function JurosCompostos(capitalInicial, taxaJuros, tempApp) {
    const jurosCompostos = capitalInicial * ((1 + taxaJuros) ** tempApp)
    const montante = capitalInicial + jurosCompostos
    console.log(`Montante com Juros Compostos: R$ ${montante.toFixed(2)}`)
}


JurosSimples(1000, .02, 12)
JurosCompostos(1000, .02, 12)