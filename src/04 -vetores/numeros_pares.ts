
import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("Digite um numero: "));
    numeros.push(numero);
}

console.log("NUMEROS PARES:");
let quantidadePares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]! % 2 === 0) {
        console.log(numeros[i]);
        quantidadePares++;
    }
}

console.log(`QUANTIDADE DE PARES = ${quantidadePares}`);