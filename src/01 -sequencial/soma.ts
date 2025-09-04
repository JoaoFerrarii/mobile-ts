import promptSync from 'prompt-sync';
const prompt = promptSync();

const x = Number(prompt("Digite o valor de X: "));
const y = Number(prompt("Digite o valor de Y: "));

const soma = x + y;

console.log(`SOMA = ${soma}`);