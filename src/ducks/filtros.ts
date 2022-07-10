import { HYDRATE } from 'next-redux-wrapper'
import { useKimetsuStoreApi } from '../api/kimetsu_store/kimetsu_store-api'
import { Categoria } from '../models/Categoria'

const FiltrosTypes = {
  OBTER_CATEGORIAS: 'filtros/OBTER_CATEGORIAS',
  OBTER_CATEGORIAS_SUCESSO: 'filtros/OBTER_CATEGORIAS_SUCESSO',
  OBTER_CATEGORIAS_ERRO: 'filtros/OBTER_CATEGORIAS_ERRO',
  TESTE: 'filtros/TESTE',
  TESTE_SUCESSO: 'filtros/TESTE_SUCESSO',
  TESTE_ERRO: 'filtros/TESTE_ERRO'
}
export interface FiltrosState {
  categorias?: Categoria[]
  loadingFiltros?: boolean
  mensagemErro?: string
}

export interface FiltrosAction {
  type: string
  payload?: FiltrosState
}

const initialState: FiltrosState = {
  categorias: [],
  loadingFiltros: true,
  mensagemErro: ''
}

export default function reducer(
  state: FiltrosState = initialState,
  action: FiltrosAction
): FiltrosState {
  switch (action.type) {
    case HYDRATE:
    case FiltrosTypes.OBTER_CATEGORIAS:
    case FiltrosTypes.TESTE:
      return {
        ...state,
        ...action.payload,
        loadingFiltros: true
      }

    case FiltrosTypes.OBTER_CATEGORIAS_SUCESSO:
      return {
        ...state,
        categorias: action?.payload?.categorias,
        loadingFiltros: false
      }

    case FiltrosTypes.OBTER_CATEGORIAS_ERRO:
      return {
        ...state,
        mensagemErro: action?.payload?.mensagemErro,
        loadingFiltros: false
      }

    case FiltrosTypes.TESTE_ERRO:
      return {
        ...state,
        mensagemErro: action?.payload?.mensagemErro
      }

    default:
      return state
  }
}

export function obterCategorias() {
  return async (dispatch: (action: FiltrosAction) => void): Promise<void> => {
    dispatch({ type: FiltrosTypes.OBTER_CATEGORIAS })

    const api = useKimetsuStoreApi()

    try {
      const resultado = await api.obterCategorias()

      dispatch({
        type: FiltrosTypes.OBTER_CATEGORIAS_SUCESSO,
        payload: { categorias: resultado }
      })
    } catch (error) {
      dispatch({
        type: FiltrosTypes.OBTER_CATEGORIAS_ERRO,
        payload: { mensagemErro: error.response?.data?.mensagem }
      })
    }
  }
}

export function teste() {
  return async (dispatch: (action: FiltrosAction) => void): Promise<void> => {
    dispatch({
      type: FiltrosTypes.TESTE_ERRO,
      payload: { mensagemErro: 'TESTEEEEE' }
    })
  }
}
