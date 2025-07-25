// Retorna a data atual no formato DD/MM/AAAA
export function obterDataAtual(): string {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const ano = hoje.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
export function obterHoraAtual(): string {
  const agora = new Date();
  return agora.toLocaleTimeString('pt-BR');
}

export function obterDiaSemana(): string {
  const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  return dias[new Date().getDay()];
}
