/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
function Triangulos(a, b, c) {
    const equilatero = (a === b) && (b === c) && (a === c)
    const isosceles = (a === b) || (b === c) || (a === c)
    if (equilatero === true) {
        console.log('Triangulo Equilatero')
    }
    else if (isosceles === true) {
        console.log('Triangulo Isosceles')
    } else {
        console.log('Triangulo Escaleno')
    }

}
Triangulos(5, 10, 5)