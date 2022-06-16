export const formatarParaReais = (valor: number): string => {
  if (!valor && valor !== 0) {
    return ''
  }

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}
