/*
Escrever um programa que leia três valores inteiros e apresente o menor dos valores lidos.
*/

var num1 = parseFloat(prompt('Primeiro valor: '));
var num2 = parseFloat(prompt('Segundo valor: '));
var num3 = parseFloat(prompt('Terceiro valor: '));

var menor;
if (num1 < num2 && num1 < num3) {
    menor = num1;
}
if (num2 < num3) {
    menor = num2;
} 
else {
    menor = num3;
}

console.clear();
console.log(menor);
