// IIFE -> Immediately Invoked Function Expression
// Alternativa interessante para fugir do escopo global

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()