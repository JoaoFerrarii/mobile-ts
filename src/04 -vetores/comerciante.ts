import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Serao digitados dados de quantos produtos? "));
const nomes: string[] = [];
const precoCompra: number[] = [];
const precoVenda: number[] = [];

for (let i = 0; i < n; i++) {
    console.log(`Produto ${i + 1}:`);
    const nome = prompt("Nome: ");
    const compra = Number(prompt("Preco de compra: "));
    const venda = Number(prompt("Preco de venda: "));
    
    nomes.push(nome);
    precoCompra.push(compra);
    precoVenda.push(venda);
}

let lucroAbaixo10 = 0;
let lucroEntre10e20 = 0;
let lucroAcima20 = 0;
let totalCompra = 0;
let totalVenda = 0;

for (let i = 0; i < n; i++) {
    const lucroPercentual = ((precoVenda[i]! - precoCompra[i]!) / precoCompra[i]!) * 100;
    
    if (lucroPercentual < 10) {
        lucroAbaixo10++;
    } else if (lucroPercentual <= 20) {
        lucroEntre10e20++;
    } else {
        lucroAcima20++;
    }
    
    totalCompra += precoCompra[i]!;
    totalVenda += precoVenda[i]!;
}

const lucroTotal = totalVenda - totalCompra;

console.log("RELATORIO:");
console.log(`Lucro abaixo de 10%: ${lucroAbaixo10}`);
console.log(`Lucro entre 10% e 20%: ${lucroEntre10e20}`);
console.log(`Lucro acima de 20%: ${lucroAcima20}`);
console.log(`Valor total de compra: ${totalCompra.toFixed(2)}`);
console.log(`Valor total de venda: ${totalVenda.toFixed(2)}`);
console.log(`Lucro total: ${lucroTotal.toFixed(2)}`);