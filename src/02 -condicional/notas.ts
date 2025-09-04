import promptSync from 'prompt-sync';
const prompt = promptSync();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const notaFinal = nota1 + nota2;

console.log(`NOTA FINAL = ${notaFinal.toFixed(1)}`);
if (notaFinal < 60.0) {
  console.log("REPROVADO");
}