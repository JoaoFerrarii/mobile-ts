import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos elementos vai ter o vetor? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("Digite um numero: "));
    numeros.push(numero);
}

let somaPares = 0;
let quantidadePares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]! % 2 === 0) {
        somaPares += numeros[i]!;
        quantidadePares++;
    }
}

if (quantidadePares === 0) {
    console.log("NENHUM NUMERO PAR");
} else {
    const mediaPares = somaPares / quantidadePares;
    console.log(`MEDIA DOS PARES = ${mediaPares.toFixed(1)}`);
}