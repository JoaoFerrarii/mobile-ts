import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantas pessoas voce vai digitar? "));
const nomes: string[] = [];
const idades: number[] = [];

for (let i = 0; i < n; i++) {
    console.log(`Dados da ${i + 1}a pessoa:`);
    const nome = prompt("Nome: ");
    const idade = Number(prompt("Idade: "));
    
    nomes.push(nome);
    idades.push(idade);
}

let maiorIdade = idades[0];
let posicaoMaisVelho = 0;

for (let i = 1; i < idades.length; i++) {
    if (idades[i]! > maiorIdade!) {
        maiorIdade = idades[i];
        posicaoMaisVelho = i;
    }
}

console.log(`PESSOA MAIS VELHA: ${nomes[posicaoMaisVelho]}`);