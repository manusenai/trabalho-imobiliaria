const biblioteca = require("readline-sync");
let n1: number = parseFloat(biblioteca.question("Para calcular a area, digite a altura: "));
let n2: number = parseFloat (biblioteca.question("Agora digite o comprimento: "));
let mult: number = n1 * n2;
console.log("area: " + mult);