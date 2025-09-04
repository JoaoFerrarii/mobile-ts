import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos elementos vai ter o vetor? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("Digite um numero: "));
    numeros.push(numero);
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]!;
}

const media = soma / numeros.length;
console.log(`MEDIA DO VETOR = ${media.toFixed(3)}`);

console.log("ELEMENTOS ABAIXO DA MEDIA:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]! < media) {
        console.log(numeros[i]!.toFixed(1));
    }
}