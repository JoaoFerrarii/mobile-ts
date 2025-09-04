import promptSync from 'prompt-sync';
const prompt = promptSync();

const glicose = Number(prompt("Digite a medida da glicose: "));
let classificacao = "";

if (glicose <= 100.0) {
  classificacao = "normal";
} else if (glicose <= 140.0) {
  classificacao = "elevado";
} else {
  classificacao = "diabetes";
}

console.log(`Classificacao: ${classificacao}`);