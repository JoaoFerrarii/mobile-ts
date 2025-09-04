
import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("Digite um numero: "));
    numeros.push(numero);
}

let valores = "VALORES = ";
for (let i = 0; i < numeros.length; i++) {
    valores += numeros[i]!.toFixed(1) + "  ";
}
console.log(valores);

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]!;
}

const media = soma / numeros.length;

console.log(`SOMA = ${soma.toFixed(2)}`);
console.log(`MEDIA = ${media.toFixed(2)}`);