import { Autor } from '../Autor'
import { Categoria } from '../Categoria'

class LivroDetalhado {
  id: number
  titulo: string
  autor: Autor
  categoria: Categoria
  descricao: string
  sumario: string
  preco: number
  paginas: number
  isbn: string
  dataDePublicacao: Date
  capa: string
  estoque: number
}

export default LivroDetalhado
