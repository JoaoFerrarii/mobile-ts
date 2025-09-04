import promptSync from 'prompt-sync';
const prompt = promptSync();

const senhaCorreta = 2002;
while (true) {
  const senha = Number(prompt("Digite a senha: "));
  if (senha === senhaCorreta) {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida! Tente novamente:");
  }
}