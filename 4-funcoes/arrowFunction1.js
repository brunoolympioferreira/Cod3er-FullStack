let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}
ola = () => 'olá' // forma padrao de trabalhar
ola = _ => 'olá'
console.log(ola())