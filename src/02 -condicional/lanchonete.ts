import promptSync from 'prompt-sync';
const prompt = promptSync();

const codigo = Number(prompt("Codigo do produto comprado: "));
const qtd = Number(prompt("Quantidade comprada: "));
let preco = 0;

switch (codigo) {
  case 1: preco = 5.0; break;
  case 2: preco = 3.5; break;
  case 3: preco = 4.8; break;
  case 4: preco = 8.9; break;
  case 5: preco = 7.32; break;
  default: preco = 0; break;
}

const total = preco * qtd;
console.log(`Valor a pagar: R$ ${total.toFixed(2)}`);