import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt("Quantos casos voce vai digitar? "));
for (let i = 0; i < N; i++) {
  console.log("Entre com o numerador: ");
  const num = Number(prompt("Insira numero"));
  console.log("Entre com o denominador: ");
  const den = Number(prompt("Insira outro numero"));
  if (den === 0) {
    console.log("DIVISAO IMPOSSIVEL");
  } else {
    console.log(`DIVISAO = ${(num / den).toFixed(2)}`);
  }
}