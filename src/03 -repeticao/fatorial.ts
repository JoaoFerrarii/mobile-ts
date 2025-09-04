import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt("Digite o valor de N: "));
let fat = 1;
for (let i = 2; i <= N; i++) {
  fat *= i;
}
console.log(`FATORIAL = ${fat}`);