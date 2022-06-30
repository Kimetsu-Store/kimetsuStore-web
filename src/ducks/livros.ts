import { HYDRATE } from 'next-redux-wrapper'
import { useKimetsuStoreApi } from '../api/kimetsu_store/kimetsu_store-api'
import { ObterLivrosPorCategoriaRequest } from '../dtos/ObterLivrosPorCategoria'
import { ObterLivrosPorPalavraRequest } from '../dtos/ObterLivrosPorPalavra'
import LivroDetalhado from '../models/Livro/livroDetalhado'

const LivrosTypes = {
  ABRIR_MODAL_DETALHES: 'livros/ABRIR_MODAL_DETALHES',
  FECHAR_MODAL_DETALHES: 'livros/FECHAR_MODAL_DETALHES',
  OBTER_LIVROS_CATEGORIAS_INICIAIS: 'livros/OBTER_LIVROS_CATEGORIAS_INICIAIS',
  OBTER_LIVROS_CATEGORIAS_INICIAIS_SUCESSO:
    'livros/OBTER_LIVROS_CATEGORIAS_INICIAIS_SUCESSO',
  OBTER_LIVROS_CATEGORIAS_INICIAIS_ERRO:
    'livros/OBTER_LIVROS_CATEGORIAS_INICIAIS_ERRO',
  OBTER_LISTAGEM_LIVROS: 'livros/OBTER_LISTAGEM_LIVROS',
  OBTER_LISTAGEM_LIVROS_SUCESSO: 'livros/OBTER_LISTAGEM_LIVROS_SUCESSO',
  OBTER_LISTAGEM_LIVROS_ERRO: 'livros/OBTER_LISTAGEM_LIVROS_ERRO'
}
export interface LivrosState {
  livro?: LivroDetalhado
  livrosListagem?: LivroDetalhado[]
  totalPaginasListagem?: number
  loadingListagem?: boolean
  livrosMobile?: LivroDetalhado[]
  livrosFrontEnd?: LivroDetalhado[]
  livrosBackEnd?: LivroDetalhado[]
  modalDetalhesAberta?: boolean
  loadingCategoriasIniciais?: boolean
  mensagemErro?: string
}

export interface LivrosAction {
  type: string
  payload?: LivrosState
}

const initialState: LivrosState = {
  livro: null,
  livrosListagem: [],
  totalPaginasListagem: 0,
  loadingListagem: true,
  livrosMobile: [],
  livrosFrontEnd: [],
  livrosBackEnd: [],
  modalDetalhesAberta: false,
  loadingCategoriasIniciais: true,
  mensagemErro: 'teste'
}

export default function reducer(
  state: LivrosState = initialState,
  action: LivrosAction
): LivrosState {
  switch (action.type) {
    case HYDRATE:

    case LivrosTypes.ABRIR_MODAL_DETALHES: {
      return {
        ...state,
        modalDetalhesAberta: action.payload.modalDetalhesAberta,
        livro: { ...action.payload.livro }
      }
    }

    case LivrosTypes.FECHAR_MODAL_DETALHES:
      return {
        ...state,
        modalDetalhesAberta: action.payload.modalDetalhesAberta,
        livro: { ...action.payload.livro }
      }

    case LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS:
      return {
        ...state,
        loadingCategoriasIniciais: true
      }

    case LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS_SUCESSO:
      return {
        ...state,
        livrosMobile: action.payload.livrosMobile,
        livrosBackEnd: action.payload.livrosBackEnd,
        livrosFrontEnd: action.payload.livrosFrontEnd,
        loadingCategoriasIniciais: false
      }

    case LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS_ERRO:
      return {
        ...state,
        mensagemErro: action.payload.mensagemErro,
        loadingCategoriasIniciais: false
      }

    case LivrosTypes.OBTER_LISTAGEM_LIVROS:
      return {
        ...state,
        loadingListagem: true
      }

    case LivrosTypes.OBTER_LISTAGEM_LIVROS_SUCESSO:
      return {
        ...state,
        livrosListagem: action.payload.livrosListagem,
        totalPaginasListagem: action.payload.totalPaginasListagem,
        loadingListagem: false
      }

    case LivrosTypes.OBTER_LISTAGEM_LIVROS_ERRO:
      return {
        ...state,
        loadingListagem: false
      }

    default:
      return state
  }
}

export function abrirModal(livroSelecionado: LivroDetalhado) {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({
      type: LivrosTypes.ABRIR_MODAL_DETALHES,
      payload: {
        modalDetalhesAberta: true,
        livro: livroSelecionado
      }
    })
  }
}

export function fecharModal() {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({
      type: LivrosTypes.FECHAR_MODAL_DETALHES,
      payload: {
        modalDetalhesAberta: false,
        livro: null
      }
    })
  }
}

export function obterLivrosCategoriasInicias() {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({ type: LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS })

    const api = useKimetsuStoreApi()

    const obterRequestPorCategoria = (categoria: string) => {
      const request: ObterLivrosPorCategoriaRequest = {
        categoria: categoria,
        page: null,
        size: 3,
        sort: []
      }
      return request
    }

    try {
      const livrosCategoriasMobile = await api.obterLivrosPorCategoria(
        obterRequestPorCategoria('Mobile')
      )
      const livrosCategoriasFrontEnd = await api.obterLivrosPorCategoria(
        obterRequestPorCategoria('FrontEnd')
      )
      const livrosCategoriasBackEnd = await api.obterLivrosPorCategoria(
        obterRequestPorCategoria('BackEnd')
      )

      dispatch({
        type: LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS_SUCESSO,
        payload: {
          livrosMobile: livrosCategoriasMobile.livrosLista,
          livrosFrontEnd: livrosCategoriasFrontEnd.livrosLista,
          livrosBackEnd: livrosCategoriasBackEnd.livrosLista
        }
      })
    } catch (error) {
      dispatch({
        type: LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS_ERRO,
        payload: { mensagemErro: error.response?.data?.mensagem }
      })
    }
  }
}

export function obterLivrosPorCategoria(
  categoria: string,
  pagina: number,
  livrosPorPagina: number
) {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({ type: LivrosTypes.OBTER_LISTAGEM_LIVROS })

    const api = useKimetsuStoreApi()

    const request: ObterLivrosPorCategoriaRequest = {
      categoria: categoria,
      page: pagina,
      size: livrosPorPagina,
      sort: []
    }

    try {
      const livrosListagem = await api.obterLivrosPorCategoria(request)

      dispatch({
        type: LivrosTypes.OBTER_LISTAGEM_LIVROS_SUCESSO,
        payload: {
          livrosListagem: livrosListagem.livrosLista,
          totalPaginasListagem: livrosListagem.totalPaginas
        }
      })
    } catch (error) {
      dispatch({
        type: LivrosTypes.OBTER_LISTAGEM_LIVROS_ERRO,
        payload: { mensagemErro: error.response?.data?.mensagem }
      })
    }
  }
}

export function obterLivrosPorPalavra(
  palavra: string,
  pagina: number,
  livrosPorPagina: number
) {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({ type: LivrosTypes.OBTER_LISTAGEM_LIVROS })

    const api = useKimetsuStoreApi()

    const request: ObterLivrosPorPalavraRequest = {
      palavra: palavra,
      page: pagina,
      size: livrosPorPagina,
      sort: []
    }

    try {
      const livrosListagem = await api.obterLivrosPorPalavra(request)

      dispatch({
        type: LivrosTypes.OBTER_LISTAGEM_LIVROS_SUCESSO,
        payload: {
          livrosListagem: livrosListagem.livrosLista,
          totalPaginasListagem: livrosListagem.totalPaginas
        }
      })
    } catch (error) {
      dispatch({
        type: LivrosTypes.OBTER_LISTAGEM_LIVROS_ERRO,
        payload: { mensagemErro: error.response?.data?.mensagem }
      })
    }
  }
}
