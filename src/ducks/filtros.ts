import { HYDRATE } from 'next-redux-wrapper'
import { Categoria } from '../models/Categoria'

export interface Types {
  OBTER_CATEGORIAS: string
  OBTER_CATEGORIAS_SUCESSO: string
  OBTER_CATEGORIAS_ERRO: string
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

const FiltrosTypes: Types = {
  OBTER_CATEGORIAS: 'filtros/OBTER_CATEGORIAS',
  OBTER_CATEGORIAS_SUCESSO: 'filtros/OBTER_CATEGORIAS_SUCESSO',
  OBTER_CATEGORIAS_ERRO: 'filtros/OBTER_CATEGORIAS_ERRO'
}

export default function reducer(
  state: FiltrosState = initialState,
  action: FiltrosAction
): FiltrosState {
  switch (action.type) {
    case HYDRATE:
    case FiltrosTypes.OBTER_CATEGORIAS:
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
  }
}

export function obterCategorias() {
  return async (dispatch: (action: FiltrosAction) => void): Promise<void> => {
    dispatch({ type: FiltrosTypes.OBTER_CATEGORIAS })

    //aqui obtemos a service da pasta service quando for criada
    const filtrosService = { nome: 'exemplo!!!', obterCategorias: 'exemplo' }

    try {
      const resultado = await filtrosService.obterCategorias

      const resultadoCategoriasMock: Categoria[] = [{ id: 1, nome: 'mobile' }]

      dispatch({
        type: FiltrosTypes.OBTER_CATEGORIAS_SUCESSO,
        payload: { categorias: resultadoCategoriasMock }
      })
    } catch (error) {
      dispatch({
        type: FiltrosTypes.OBTER_CATEGORIAS_ERRO,
        payload: { mensagemErro: error.response?.data?.mensagem }
      })
    }
  }
}
