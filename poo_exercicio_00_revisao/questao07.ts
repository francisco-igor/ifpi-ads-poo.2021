/*
Escreva um programa que leia um vetor de 5 posições e apresente-o na tela.
*/

var vetor = [], cont = 0;

while (cont < 5) {
    var i = parseFloat(prompt('Digite um numero: '));
    vetor.push(i);
    cont++;
}

console.clear();
console.log(vetor);
