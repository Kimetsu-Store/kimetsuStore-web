import LivroDetalhado from '../models/Livro/livroDetalhado'

export class ObterLivrosPorCategoriaResponse {
  totalPaginas: number
  livrosLista: LivroDetalhado[]
}

export class ObterLivrosPorCategoriaRequest {
  categoria: string
  page: number
  size: number
  sort?: string[]
}
