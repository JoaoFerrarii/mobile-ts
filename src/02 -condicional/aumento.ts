import promptSync from 'prompt-sync';
const prompt = promptSync();

const salario = Number(prompt("Digite o salario da pessoa: "));
let perc = 0;

if (salario <= 1000.0) {
  perc = 20;
} else if (salario <= 3000.0) {
  perc = 15;
} else if (salario <= 8000.0) {
  perc = 10;
} else {
  perc = 5;
}

const aumento = salario * perc / 100;
const novo = salario + aumento;

console.log(`Novo salario = R$ ${novo.toFixed(2)}`);
console.log(`Aumento = R$ ${aumento.toFixed(2)}`);
console.log(`Porcentagem = ${perc} %`);