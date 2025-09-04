import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt("Nome: ");
const valorHora = Number(prompt("Valor por hora: "));
const horasTrabalhadas = Number(prompt("Horas trabalhadas: "));

const pagamento = valorHora * horasTrabalhadas;
console.log(`O pagamento para ${nome} deve ser ${pagamento.toFixed(2)}`);