/*
Escreva um programa que apresente o mês por extenso, a partir de um número
digitado pelo usuário (entre 1 e 12).
*/

var m = parseInt(prompt('Digite o mes no formato (dd/mm/aa): '));

var mes;

if (m == 1) {
    mes = 'Janeiro';
}
else if (m == 2) {
    mes = 'Fevereiro';
}
else if (m == 3) {
    mes = 'Março';
}
else if (m == 4) {
    mes = 'Abril';
}
else if (m == 5) {
    mes = 'Maio';
}
else if (m == 6) {
    mes = 'Junho';
}
else if (m == 7) {
    mes = 'Julho';
}
else if (m == 8) {
    mes = 'Agosto';
}
else if (m == 9) {
    mes = 'Setembro';
}
else if (m == 10) {
    mes = 'Outubro';
}
else if (m == 11) {
    mes = 'Novembro';
}
else if (m == 12) {
    mes = 'Dezembro';
}

console.clear();
console.log(mes);
