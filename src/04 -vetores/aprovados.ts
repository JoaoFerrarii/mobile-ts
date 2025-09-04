import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos alunos serao digitados? "));
const nomes: string[] = [];
const nota1: number[] = [];
const nota2: number[] = [];

for (let i = 0; i < n; i++) {
    console.log(`Digite nome, primeira e segunda nota do ${i + 1}o aluno:`);
    const nome = prompt("");
    const primeiraNota = Number(prompt(""));
    const segundaNota = Number(prompt(""));
    
    nomes.push(nome);
    nota1.push(primeiraNota);
    nota2.push(segundaNota);
}

console.log("Alunos aprovados:");
for (let i = 0; i < n; i++) {
    const media = (nota1[i]! + nota2[i]!) / 2;
    if (media >= 6.0) {
        console.log(nomes[i]);
    }
}