import promptSync from 'prompt-sync';
const prompt = promptSync();

const totalSegundos = Number(prompt("Digite a duracao em segundos: "));

const horas = Math.floor(totalSegundos / 3600);
const minutos = Math.floor((totalSegundos % 3600) / 60);
const segundos = totalSegundos % 60;

console.log(`${horas}:${minutos}:${segundos}`);