import DadosCep from '../../models/DadosCep/dadosCep'
import { useHttp } from '../_base/use-http'

export function useBuscarCepApi() {
  const http = useHttp('http://viacep.com.br/ws/')

  async function obterDadosPorCep(cep: string): Promise<DadosCep> {
    const response = await http.get(`${cep}/json/`)

    return response
  }

  return {
    obterDadosPorCep
  }
}
