import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite dois numeros:");
const x = Number(prompt("Digite o primeiro numero"));
const y = Number(prompt("Digite o segundo numero"));

const inicio = Math.min(x, y) + 1;
const fim = Math.max(x, y);
let soma = 0;
for (let i = inicio; i < fim; i++) {
  if (i % 2 !== 0) soma += i;
}
console.log(`SOMA DOS IMPARES = ${soma}`);