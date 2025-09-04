import promptSync from 'prompt-sync';
const prompt = promptSync();

const X = Number(prompt("Digite o valor de X: "));
for (let i = 1; i <= X; i += 2) {
  console.log(i);
}