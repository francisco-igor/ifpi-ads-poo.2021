/*
Construir um programa que leia uma string s, e dois caracteres a e b. 
Em seguida, o programa deve substituir todas as ocorrências do caractere 
a na string s pelo caractere b.
*/

var s = prompt('Digite uma frase: ');
var a = prompt('Digite o caratere opçao a: ');
var b = prompt('Digite o caratere opçao b: ');

var len = s.length, cont = 0, concat = '';

while (cont < len) {;
    var l = s[cont];

    if (s[cont] == a) {
        concat = concat + b;
    } else {
        concat = concat + l;
    }
    cont++;
}

console.clear();
console.log(concat);
