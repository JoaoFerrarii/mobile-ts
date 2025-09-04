import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
  const x = Number(prompt("Digite um numero inteiro: "));
  if (x === 0) break;
  let soma = 0;
  let atual = x % 2 === 0 ? x : x + 1;
  for (let i = 0; i < 5; i++) {
    soma += atual;
    atual += 2;
  }
  console.log(`SOMA = ${soma}`);
}