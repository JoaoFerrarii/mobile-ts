import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Digite qual tabuada quer(numero)? "));
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}