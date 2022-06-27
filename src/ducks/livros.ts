import { HYDRATE } from 'next-redux-wrapper'
import { useKimetsuStoreApi } from '../api/kimetsu_store/kimetsu_store-api'
import { ObterLivrosPorCategoriaRequest } from '../dtos/ObterLivrosPorCategoria'
import LivroDetalhado from '../models/Livro/livroDetalhado'

const LivrosTypes = {
  ABRIR_MODAL_DETALHES: 'livros/ABRIR_MODAL_DETALHES',
  FECHAR_MODAL_DETALHES: 'livros/FECHAR_MODAL_DETALHES',
  OBTER_LIVROS_CATEGORIAS_INICIAIS: 'livros/OBTER_LIVROS_CATEGORIAS_INICIAIS',
  OBTER_LIVROS_CATEGORIAS_INICIAIS_SUCESSO:
    'livros/OBTER_LIVROS_CATEGORIAS_INICIAIS_SUCESSO',
  OBTER_LIVROS_CATEGORIAS_INICIAIS_ERRO:
    'livros/OBTER_LIVROS_CATEGORIAS_INICIAIS_ERRO'
}
export interface LivrosState {
  livro?: LivroDetalhado
  livrosMobile?: LivroDetalhado[]
  livrosFrontEnd?: LivroDetalhado[]
  livrosBackEnd?: LivroDetalhado[]
  idLivroSelecionado?: number
  modalDetalhesAberta?: boolean
  loadingDetalhesLivro?: boolean
  loadingCategoriasIniciais?: boolean
  mensagemErro?: string
}

export interface LivrosAction {
  type: string
  payload?: LivrosState
}

const initialState: LivrosState = {
  livro: null,
  livrosMobile: [],
  livrosFrontEnd: [],
  livrosBackEnd: [],
  idLivroSelecionado: 0,
  modalDetalhesAberta: false,
  loadingDetalhesLivro: true,
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
      console.log(action.payload.livro)
      return {
        ...state,
        idLivroSelecionado: action.payload.idLivroSelecionado,
        modalDetalhesAberta: action.payload.modalDetalhesAberta,
        livro: { ...action.payload.livro }
      }
    }

    case LivrosTypes.FECHAR_MODAL_DETALHES:
      return {
        ...state,
        idLivroSelecionado: action.payload.idLivroSelecionado,
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
        livrosFrontEnd: action.payload.livrosFrontEnd
      }

    case LivrosTypes.OBTER_LIVROS_CATEGORIAS_INICIAIS:
      return {
        ...state,
        mensagemErro: action.payload.mensagemErro,
        loadingCategoriasIniciais: false
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
      console.log('fez')
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

export function fecharModal() {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({
      type: LivrosTypes.FECHAR_MODAL_DETALHES,
      payload: {
        modalDetalhesAberta: false,
        idLivroSelecionado: 0,
        livro: null
      }
    })
  }
}
