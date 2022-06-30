import LivroDetalhado from '../models/Livro/livroDetalhado'

export class ObterLivrosPorPalavraResponse {
  totalPaginas: number
  livrosLista: LivroDetalhado[]
}

export class ObterLivrosPorPalavraRequest {
  palavra: string
  page: number
  size: number
  sort?: string[]
}
