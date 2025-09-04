import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quanto numeros voce vai digitar? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("Digite um numero: "));
    numeros.push(numero);
}

let maiorValor = numeros[0];
let posicaoMaior = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i]! > maiorValor!) {
        maiorValor = numeros[i];
        posicaoMaior = i;
    }
}

console.log(`MAIOR VALOR = ${maiorValor!.toFixed(1)}`);
console.log(`POSICAO DO MAIOR VALOR = ${posicaoMaior}`);