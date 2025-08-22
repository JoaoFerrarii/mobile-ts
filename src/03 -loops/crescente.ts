import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
  console.log("\nDigite dois valores inteiros:");

  const x = Number(prompt("Digite o primeiro valor (X): "));
  const y = Number(prompt("Digite o segundo valor (Y): "));

  if (x === y) {
    break; 
  }

  if (x < y) {
    console.log("CRESCENTE");
  } else {
    console.log("DECRESCENTE");
  }
}

