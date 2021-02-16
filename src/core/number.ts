export function toCurrency(value: string | number): string {
  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(Number(value));
}
