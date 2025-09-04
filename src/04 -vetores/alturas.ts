import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantas pessoas serao digitadas? "));
const nomes: string[] = [];
const idades: number[] = [];
const alturas: number[] = [];

for (let i = 0; i < n; i++) {
    console.log(`Dados da ${i + 1}a pessoa:`);
    const nome = prompt("Nome: ");
    const idade = Number(prompt("Idade: "));
    const altura = Number(prompt("Altura: "));
    
    nomes.push(nome);
    idades.push(idade);
    alturas.push(altura);
}

let somaAlturas = 0;
for (let i = 0; i < alturas.length; i++) {
    somaAlturas += alturas[i]!;
}
const alturaMedia = somaAlturas / alturas.length;

let pessoasMenores16 = 0;
const nomesMenores16: string[] = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i]! < 16) {
        pessoasMenores16++;
        nomesMenores16.push(nomes[i]!);
    }
}

const porcentagemMenores16 = (pessoasMenores16 * 100) / n;

console.log(`Altura média: ${alturaMedia.toFixed(2)}`);
console.log(`Pessoas com menos de 16 anos: ${porcentagemMenores16.toFixed(1)}%`);

for (let i = 0; i < nomesMenores16.length; i++) {
    console.log(nomesMenores16[i]);
}