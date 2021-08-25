/*
Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética destes números. Obs: o valor –1 é
somente um terminador e não deve ser considerado nos cálculos.
*/

var cont = 0;
var soma = 0;

do {
    var num = parseInt(prompt('Digite um numero: '));
    soma += num;
    cont++;
}
while (num != -1) {}

const media = (soma + 1) / (cont - 1);

console.clear();
console.log(media);
