import promptSync from 'prompt-sync';
const prompt = promptSync();

const precoUnitario = Number(prompt("Preço unitário do produto: "));
const quantidade = Number(prompt("Quantidade comprada: "));
const dinheiroRecebido = Number(prompt("Dinheiro recebido: "));

const troco = dinheiroRecebido - (precoUnitario * quantidade);
console.log(`TROCO = ${troco.toFixed(2)}`);