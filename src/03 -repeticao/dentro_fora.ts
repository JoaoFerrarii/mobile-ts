import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt("Quantos numeros voce vai digitar? "));
let dentro = 0, fora = 0;
for (let i = 0; i < N; i++) {
  const x = Number(prompt("Digite um numero: "));
  if (x >= 10 && x <= 20) dentro++;
  else fora++;
}
console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);


