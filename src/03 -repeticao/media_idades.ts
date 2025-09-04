import promptSync from 'prompt-sync';
const prompt = promptSync();

let soma = 0;
let cont = 0;
console.log("Digite as idades:");
while (true) {
  const idade = Number(prompt("Idade:"));
  if (idade < 0) break;
  soma += idade;
  cont++;
}
if (cont === 0) {
  console.log("IMPOSSIVEL CALCULAR");
} else {
  console.log(`MEDIA = ${ (soma / cont).toFixed(2) }`);
}