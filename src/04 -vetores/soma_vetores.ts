
import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos valores vai ter cada vetor? "));
const vetorA: number[] = [];
const vetorB: number[] = [];

console.log("Digite os valores do vetor A:");
for (let i = 0; i < n; i++) {
    const valor = Number(prompt(""));
    vetorA.push(valor);
}

console.log("Digite os valores do vetor B:");
for (let i = 0; i < n; i++) {
    const valor = Number(prompt(""));
    vetorB.push(valor);
}

const vetorC: number[] = [];

console.log("VETOR RESULTANTE:");
for (let i = 0; i < n; i++) {
    const soma = vetorA[i]! + vetorB[i]!;
    vetorC.push(soma);
    console.log(soma);
}