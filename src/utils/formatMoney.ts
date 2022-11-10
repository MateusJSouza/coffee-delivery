export function formatMoney(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2, // garante que o 0 esteja presente
  })
}