import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("Digite um numero: "));
    numeros.push(numero);
}

console.log("NUMEROS NEGATIVOS:");
let negativos = "";
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]! < 0) {
        negativos += numeros[i] + "  ";
    }
}
console.log(negativos);