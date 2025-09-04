import promptSync from 'prompt-sync';
const prompt = promptSync();

const minutos = Number(prompt("Digite a quantidade de minutos: "));
const base = 50.0;
const excesso = minutos > 100 ? (minutos - 100) * 2.0 : 0.0;
const total = base + excesso;

console.log(`Valor a pagar: R$ ${total.toFixed(2)}`);