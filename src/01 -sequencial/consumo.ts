import promptSync from 'prompt-sync';
const prompt = promptSync();

const distancia = Number(prompt("Distancia percorrida: "));
const combustivelGasto = Number(prompt("Combustível gasto: "));

const consumoMedio = distancia / combustivelGasto;
console.log(`Consumo medio = ${consumoMedio.toFixed(3)}`);