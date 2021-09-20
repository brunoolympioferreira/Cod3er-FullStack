//posso chamar a função antes de chamar
console.log(soma(2,2))

// Tradicional >> function declaration >> 
function soma(x, y) {
    return x + y
}

// Function Expression
const sub = function (x, y) {
    return x - y
}

// Named function expression ( forma pouco usada)
const mult = function mult(x, y) {
    return x * y
}