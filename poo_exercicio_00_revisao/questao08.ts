/*
Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. 
A seguir, conte quantos valores pares existem no vetor.
*/

var vetor = [], cont1 = 0, cont2 = 0;

while (cont2 < 20) {
    var i = parseFloat(prompt('Digite um numero: '));
    vetor.push(i);
    if (i % 2 == 0) {
        cont1++;
    }
    cont2++;
}

console.clear();
console.log(vetor);
console.log('Existem ', cont1, 'numeros pares.')
