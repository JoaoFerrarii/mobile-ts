import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt("Digite o valor do raio do circulo: "));
const area = 3.14159 * r * r;

console.log(`AREA = ${area.toFixed(3)}`);