import { useAxios } from './use-axios'

export function useHttp(baseURL: string) {
  const instance = useAxios(baseURL)

  async function get(url: string) {
    const response = await instance.get(url)

    return response.data
  }
  async function deleteHttp(url: string) {
    const response = await instance.delete(url)
    return response.data
  }
  async function post(url: string, data) {
    const response = await instance.post(url, data)

    return response.data
  }

  async function put(url: string, data) {
    const response = await instance.put(url, data)

    return response.data
  }

  return {
    get,
    post,
    put,
    deleteHttp
  }
}
