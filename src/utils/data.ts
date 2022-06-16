import moment from 'moment'

export const obterDiaMesAnoCompleto = (data: string): string => {
  return moment(data).isValid() ? moment(data).format('DD/MM/YYYY') : ''
}
