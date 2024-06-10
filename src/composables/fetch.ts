import type { Menu } from '@/types/menu'

interface Response {
  count?: number
  data: Menu[] | Menu
  err: boolean
}

export async function useFetch(path: string) {
  const url = import.meta.env.VITE_API_URL

  const data = await fetch(`${url}/${path}`)
  const response = await data.json()

  if (response.err) {
    throw response.err
  }

  return response as Response
}
