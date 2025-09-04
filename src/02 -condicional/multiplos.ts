import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite dois numeros inteiros:");
const n1 = Number(prompt("Primeiro numero"));
const n2 = Number(prompt("Segundo numero:"));

if (n1 % n2 === 0 || n2 % n1 === 0) {
  console.log("Sao multiplos");
} else {
  console.log("Nao sao multiplos");
}