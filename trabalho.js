var biblioteca = require("readline-sync");
var n1 = parseFloat(biblioteca.question("Para calcular a area, digite a altura: "));
var n2 = parseFloat(biblioteca.question("Agora digite o comprimento: "));
var mult = n1 * n2;
console.log("area: " + mult);
