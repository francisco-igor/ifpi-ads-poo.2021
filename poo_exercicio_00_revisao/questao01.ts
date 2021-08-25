/*
Escreva um programa que possua uma variável com um número inteiro e mostre seu
antecessor e sucessor.
*/

var num = prompt('Digite um numero inteiro: ');

var sucessor = parseFloat(num) + 1;
var antecessor = parseFloat(num) - 1;

console.clear()
console.log('sucessor', sucessor);
console.log('antecessor', antecessor);
