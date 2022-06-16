import { HYDRATE } from 'next-redux-wrapper'
import LivroDetalhado from '../models/Livro/livroDetalhado'

const LivrosTypes = {
  ABRIR_MODAL_DETALHES: 'livros/ABRIR_MODAL_DETALHES',
  FECHAR_MODAL_DETALHES: 'livros/FECHAR_MODAL_DETALHES'
}
export interface LivrosState {
  livro?: LivroDetalhado
  idLivroSelecionado?: number
  modalDetalhesAberta?: boolean
  loadingDetalhesLivro?: boolean
  mensagemErro?: string
}

export interface LivrosAction {
  type: string
  payload?: LivrosState
}

const initialState: LivrosState = {
  livro: null,
  idLivroSelecionado: 0,
  modalDetalhesAberta: false,
  loadingDetalhesLivro: true,
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
        modalDetalhesAberta: action.payload.modalDetalhesAberta
      }

    default:
      return state
  }
}

export function abrirModal(idLivroSelecionado: number) {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    const livro = {
      categoria: 'Mobile',
      dataPublicacao: new Date(),
      id: 1,
      imagem:
        'https://images-na.ssl-images-amazon.com/images/I/71MIG6Z3F2L.jpg',
      isbn: '1234123123123',
      nome: 'Livro bacana exemplo',
      nomeAutor: 'Autor nome da Silva',
      numeroPaginas: 382,
      preco: 50,
      sumario:
        'A enumeração dos capítulos, seções ou partes da obra, na ordem em que aparecem no texto. Se a obra for apresentada em mais de um VOLUME, em cada um deles deve constar o SUMÁRIO completo da obra. Deve ser apresentado em página distinta, após a Folha de rosto, a Dedicatória, os Agradecimentos, a Epígrafe e o Prefácio.A enumeração dos capítulos, seções ou partes da obra, na ordem em que aparecem no texto. Se a obra for apresentada em mais de um VOLUME, em cada um deles deve constar o SUMÁRIA enumeração dos capítulos, seções ou partes da obra, na ordem em que aparecem no texto. Se a obra for apresentada em mais de um VOLUME, em cada um deles deve constar o SUMÁRIO completo da obra. Deve ser apresentado em página distinta, após a Folha de rosto, a Dedicatória, os Agradecimentos, a Epígrafe e o Prefácio.A enumeração dos capítulos, seções ou partes da obra, na ordem em que aparecem no texto. Se a obra for apresentada em mais de um VOLUME, em cada um deles deve constar o SUMÁRI'
    }
    console.log(livro)
    dispatch({
      type: LivrosTypes.ABRIR_MODAL_DETALHES,
      payload: {
        modalDetalhesAberta: true,
        idLivroSelecionado: idLivroSelecionado,
        livro: { ...livro }
      }
    })
  }
}

export function fecharModal() {
  return async (dispatch: (action: LivrosAction) => void): Promise<void> => {
    dispatch({
      type: LivrosTypes.FECHAR_MODAL_DETALHES,
      payload: { modalDetalhesAberta: false, idLivroSelecionado: 0 }
    })
  }
}
