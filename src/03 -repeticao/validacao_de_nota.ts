import promptSync from 'prompt-sync';
const prompt = promptSync();

let nota1: number;
do {
  nota1 = Number(prompt("Digite a primeira nota: "));
  if (nota1 < 0 || nota1 > 10) console.log("Valor invalido! Tente novamente:");
} while (nota1 < 0 || nota1 > 10);

let nota2: number;
do {
  nota2 = Number(prompt("Digite a segunda nota: "));
  if (nota2 < 0 || nota2 > 10) console.log("Valor invalido! Tente novamente:");
} while (nota2 < 0 || nota2 > 10);

const media = (nota1 + nota2) / 2;
console.log(`MEDIA = ${ media.toFixed(2) }`);