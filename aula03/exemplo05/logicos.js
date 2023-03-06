// && - and - E
console.log("Operador E")
console.log("V E V = " + (true && true))
console.log("V E F = " + (true && false))
console.log("F E V = " + (false && true))
console.log("F E F = " + (false && false))
/*
Regra do E - somente terei resposta verdadeiras se as duas
proposições forem verdadeiras
*/

// || - or - OU
console.log("Operador OU")
console.log("V OU V = " + (true || true))
console.log("V OU F = " + (true || false))
console.log("F OU V = " + (false || true))
console.log("F OU F = " + (false || false))
/*
Regra do OU - somente terei resposta falsas se as duas
proposições forem falsas
*/

// ! - not - NEGAÇÃO
console.log("! V = "+(!true))
console.log("! F = "+(!false))

