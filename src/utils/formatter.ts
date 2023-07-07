export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('PT-BR', {
  style: 'currency',
  currency: 'BRL',
})
