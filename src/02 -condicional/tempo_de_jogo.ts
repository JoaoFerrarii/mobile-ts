import promptSync from 'prompt-sync';
const prompt = promptSync();

const hi = Number(prompt("Hora inicial: "));
const hf = Number(prompt("Hora final: "));
let duracao = 0;

if (hi < hf) {
  duracao = hf - hi;
} else if (hi > hf) {
  duracao = 24 - hi + hf;
} else {
  duracao = 24;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);