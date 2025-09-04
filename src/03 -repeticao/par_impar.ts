import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt("Quantos numeros voce vai digitar? "));
for (let i = 0; i < N; i++) {
  const x = Number(prompt("Digite um numero: "));
  if (x === 0) {
    console.log("NULO");
  } else {
    const tipo = x % 2 === 0 ? "PAR" : "IMPAR";
    const sinal = x > 0 ? "POSITIVO" : "NEGATIVO";
    console.log(`${tipo} ${sinal}`);
  }
}