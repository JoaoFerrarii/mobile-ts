import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
  console.log("Digite dois numeros:");
  const x = Number(prompt("Digite o primeiro numero"));
  const y = Number(prompt("Digite o segundo numero"));
  if (x === y) break;
  if (x < y) console.log("CRESCENTE!");
  else console.log("DECRESCENTE!");
}