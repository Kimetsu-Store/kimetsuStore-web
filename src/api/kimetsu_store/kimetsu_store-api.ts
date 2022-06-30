import {
  ObterLivrosPorCategoriaRequest,
  ObterLivrosPorCategoriaResponse
} from '../../dtos/ObterLivrosPorCategoria'
import {
  ObterLivrosPorPalavraRequest,
  ObterLivrosPorPalavraResponse
} from '../../dtos/ObterLivrosPorPalavra'
import { Autor } from '../../models/Autor'
import { Categoria } from '../../models/Categoria'
import { useHttp } from '../_base/use-http'

export function useKimetsuStoreApi() {
  const http = useHttp('https://kimetsu-store-back.herokuapp.com/livraria/')

  async function obterCategorias(): Promise<Categoria[]> {
    const response = await http.get(`/categorias`)
    return response
  }

  async function obterAutores(): Promise<Autor[]> {
    const response = await http.get(`/autores`)
    return response
  }

  async function obterLivrosPorCategoria(
    request: ObterLivrosPorCategoriaRequest
  ): Promise<ObterLivrosPorCategoriaResponse> {
    const response = await http.get(
      `/livros/categoria?categoria=${request.categoria}&page=${request.page}&size=${request.size}`
    )
    return response
  }

  async function obterLivrosPorPalavra(
    request: ObterLivrosPorPalavraRequest
  ): Promise<ObterLivrosPorPalavraResponse> {
    const response = await http.get(
      `/livros/?palavra=${request.palavra}&page=${request.page}&size=${request.size}`
    )
    return response
  }

  return {
    obterCategorias,
    obterAutores,
    obterLivrosPorCategoria,
    obterLivrosPorPalavra
  }
}
