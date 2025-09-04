import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite as tres distancias:");
const d1 = Number(prompt("Primeira distancia"));
const d2 = Number(prompt("Segunda distancia"));
const d3 = Number(prompt("Terceira distancia"));

const maior = Math.max(d1, d2, d3);
console.log(`MAIOR DISTANCIA = ${maior.toFixed(2)}`);