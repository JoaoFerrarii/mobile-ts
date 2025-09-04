import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco = Number(prompt("Preço unitário do produto: "));
const quantidade = Number(prompt("Quantidade comprada: "));
const recebido = Number(prompt("Dinheiro recebido: "));
const total = preco * quantidade;

if (recebido < total) {
  const faltam = total - recebido;
  console.log(`DINHEIRO INSUFICIENTE. FALTAM ${faltam.toFixed(2)} REAIS`);
} else {
  const troco = recebido - total;
  console.log(`TROCO = ${troco.toFixed(2)}`);
}