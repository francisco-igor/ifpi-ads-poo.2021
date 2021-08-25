/*
Escreva uma função que dados 2 valores reais p e x calcule e retorne quanto vale 
p por cento de x.
*/

var x = parseFloat(prompt('Digite uma numero: '));
var p = parseFloat(prompt('Digite a porcentagem desejada: '));

const perc = (x * p) / 100;

console.clear();
console.log(p,'% de ',x,'equivale(m) a ',perc);
