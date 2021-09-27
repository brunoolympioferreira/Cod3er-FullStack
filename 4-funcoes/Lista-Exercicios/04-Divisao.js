/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
//Arrow Function
divisao = (a, b) => {
    return a % b
}
console.log(divisao(10, 3))

//Funcao Tradicional guardando em uma variavel
const funcao = function Divisao(a, b) {
    return a % b
}
console.log(funcao(10, 3))

//Funcao sem variavel
function Division(a, b) {
    console.log(a % b)
}
Division(10, 3)
