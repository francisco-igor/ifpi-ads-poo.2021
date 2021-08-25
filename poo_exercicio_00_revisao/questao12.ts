/*
Faça uma função que recebe por parâmetro uma medida de tempo expressa em
segundos e retorna, também por parâmetro, esse tempo em horas, minutos e
segundos no formato: “hh:mm:ss”.
*/

var st = parseInt(prompt('Tempo em segundos: '));

var h = tempo(st)[0];
var m = tempo(st)[1];
var s = tempo(st)[2];

console.clear();
console.log(h, ':', m, ':', s);

function tempo(s : number) {
    let horas = Math.floor(s / 3600);
    let mins =  Math.floor((s % 3600) / 60);
    let secs = (s % 3600) % 60;

    return [horas, mins, secs];
}
