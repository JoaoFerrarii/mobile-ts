import promptSync from 'prompt-sync';
const prompt = promptSync();

const v1 = Number(prompt("Primeiro valor: "));
const v2 = Number(prompt("Segundo valor: "));
const v3 = Number(prompt("Terceiro valor: "));

const menor = Math.min(v1, v2, v3);
console.log(`MENOR = ${menor}`);